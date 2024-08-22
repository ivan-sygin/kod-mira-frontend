import axios from 'axios'
import { ApiDataProvider } from '@/api/dataProvider'
import { mainUrl } from '../urls'

export class MainApiController {
  static ipAdress = mainUrl

  static async getMethod(url, config, auth = false) {
    if (auth) {
      window.localStorage.setItem(
        'access_token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZSI6ImhpcmluZ19tYW5hZ2VyIiwiZXhwIjoxNzQ4NzY0MTUzfQ.oh_D9Dqh96WOqpQgN7IccQdSQ-Cv_-SEJJV9IWZzfBw'
      )

      let token = window.localStorage.getItem('access_token')
      config['headers']['Authorization'] = 'Bearer ' + token
    }

    return await axios.get(this.ipAdress + url, config)
  }

  static async postMethod(url, data, config, auth = false) {
    if (auth) {
      window.localStorage.setItem(
        'access_token',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwicm9sZSI6ImhpcmluZ19tYW5hZ2VyIiwiZXhwIjoxNzQ4NzY0MTUzfQ.oh_D9Dqh96WOqpQgN7IccQdSQ-Cv_-SEJJV9IWZzfBw'
      )
      let token = window.localStorage.getItem('access_token')
      config['headers']['Authorization'] = 'Bearer ' + token
    }
    try {
      return new ApiDataProvider(
        await axios.post(this.ipAdress + url, data, config)
      )
    } catch (err) {
      console.log(new ApiDataProvider(err.data.error))
      return new ApiDataProvider(err.data.error)
    }
  }
}
