import { MainApiController } from './controller'

export class MainApi {
  static async uploadResume(file) {
    const formData = new FormData()
    formData.append('file', file)

    const config = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      validateStatus: () => true
    }
    let res = await MainApiController.postMethod(
      '/resume/upload/hello',
      formData,
      config,
      true
    )
    console.log(res)
    return res
  }

  static async getStackFromTemplate() {
    const config = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      validateStatus: () => true
    }
    let res = await MainApiController.getMethod(
      '/templates/getMyTemplates',
      config,
      true
    )
    let data = res['data']['templates']
    let result = []
    data.forEach((element) => {
      element['skills'].forEach((elem) => {
        if (elem['name'][0] == '!') result.push(elem['name'].slice(1))
      })
    })
    console.log('это массива стека ' + result)
    return result
  }

  static async getSkillsFromTemplate() {
    const config = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      validateStatus: () => true
    }
    let res = await MainApiController.getMethod(
      '/templates/getMyTemplates',
      config,
      true
    )
    let data = res['data']['templates']
    let result = []
    data.forEach((element) => {
      element['skills'].forEach((elem) => {
        if (elem['name'][0] !== '!') result.push(elem['name'])
      })
    })
    console.log(result)
    return result
  }

  static async getStackFromTemplateByName(nameParam) {
    if (nameParam == '') return []
    const config = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      validateStatus: () => true
    }
    let res = await MainApiController.getMethod(
      '/templates/getMyTemplates',
      config,
      true
    )
    let data = res['data']['templates']
    let result = []
    let newdata = data.filter((elem) => elem['name'] == nameParam)
    console.log(data, nameParam)
    newdata[0]['skills'].forEach((elems) => {
      console.log('elem', elems)
      result.push(elems['name'])
    })
    console.log(result)
    return result
  }

  static async getMyTemplates() {
    const config = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      validateStatus: () => true
    }
    let res = await MainApiController.getMethod(
      '/templates/getMyTemplates',
      config,
      true
    )
    let data = res['data']['templates']
    let result = []
    data.forEach((element) => {
      result.push(element['name'])
    })

    return result
  }

  static async getResumeById(id) {
    const config = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      validateStatus: () => true
    }
    let res = await MainApiController.getMethod(
      '/resume/getById?resume_id=' + id,
      config,
      true
    )
    return res
  }

  static async getAllResumes() {
    const config = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      validateStatus: () => true
    }
    let res = await MainApiController.getMethod(
      '/resume/getMyResumes?limit=10&offset=0',
      config,
      true
    )
    console.log(res['data']['resumes'])
    let result = []
    res['data']['resumes'].forEach((elem) => {
      let tmp = []
      elem['stacks'].forEach((element) => {
        tmp.push(element['stack'])
      })
      let tmp1 = []
      elem['skills'].forEach((element) => {
        tmp1.push([element['name'], element['type']])
      })
      result.push({
        id: elem['id'],
        firstName: elem['first_name'],
        secondName: elem['last_name'],
        stacks: tmp,
        skills: tmp1
      })
    })
    return result
  }

  static async createNewTemplate(name, stage) {
    let data = { name: name, experience_month: stage }

    const config = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      validateStatus: () => true
    }
    let res = await MainApiController.postMethod(
      '/templates/create',
      data,
      config,
      true
    )
    console.log(res)
    return res
  }

  static async bindTemplateParams(id, params, params2 = null) {
    let tmp = params.map((el) => {
      return { name: el }
    })

    let tmp2 = params2.map((el) => {
      return { name: '!' + el }
    })

    let da = { template_id: id, data: { skills: tmp.concat(tmp2) } }

    //{"skills": [{"name": "Python"}, {"name": "FastAPI"}, {"name": "ReactJS"}, {"name": "VueJS"}]}

    const config = {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      validateStatus: () => true
    }
    let res = await MainApiController.postMethod(
      '/templates/bindParameters',
      da,
      config,
      true
    )
    console.log(res)
    return res
  }
}
