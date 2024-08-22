'use client'
import { MutatingDots } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, CircularProgress, circularProgressClasses } from '@mui/material'
import { primaryColor } from '@/colors/colors'

const ToCsvButton = ({ id }) => {
  const [resumeData, setResumeData] = useState(null) // Initially set to null to indicate loading state

  const getServerSideData = async () => {
    const resumeId = id // Access resumeId from URL
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZSI6ImhpcmluZ19tYW5hZ2VyIiwiZXhwIjoxNzQ4NTk3MTUxfQ.YFxqd6KQ8-LRs_zqGytTjLFUKw5HXwzjaXxi3GnmFA0' // Access token from environment variable

    try {
      const { data } = await axios.get(
        `http://192.168.137.33:8001/resume/getById?resume_id=${resumeId}`,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      setResumeData(data.resume) // Store fetched resume data
    } catch (err) {
      console.error(err) // Handle errors gracefully
    }
  }

  useEffect(() => {
    getServerSideData()
  }, [])

  const handleDownloadCSV = () => {
    if (!resumeData) {
      console.warn(
        'Resume data not yet available. Please wait for data to be fetched.'
      )
      return
    }

    const csvData = Object.entries(resumeData)
      .map(([key, value]) => {
        if (typeof value === 'object') {
          return value.map((valueValue) => {
            return Object.entries(valueValue)
              .map(([key, valueValueValue]) => {
                return `${valueValueValue}`
              })
              .join(', ')
          })
        } else return `${value}`
      })
      .join(', ')
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' })
    const url = window.URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'resume_data.csv' // Customizable filename
    link.click()

    // Optional cleanup: Revoke the object URL after download (recommended)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div>
      {resumeData === null ? ( // Check for null state to indicate loading
        <MutatingDots
          visible={true}
          height='100'
          width='100'
          color={primaryColor}
          secondaryColor='#4fa94d'
          radius='10'
          ariaLabel='mutating-dots-loading'
          wrapperStyle={{}}
          wrapperClass=''
        />
      ) : resumeData ? ( // Check for existence of data
        <button onClick={handleDownloadCSV}>
          <Box
            bgcolor={primaryColor}
            width={'100%'}
            paddingX={2}
            height={50}
            borderRadius={4}
            fontWeight={700}
            className={'text-white flex justify-center items-center'}
            sx={{ animationName: 'scaleAnim', animationDuration: '1s' }}
          >
            Экспортировать резюме
          </Box>
        </button>
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default ToCsvButton
