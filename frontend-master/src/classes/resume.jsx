class Resume {
  id = 0
  name = 'Ivan Sygin'
  type = 'Frontend-программист'
  stack = ['React']
  skills = []
  photo =
    'http://enotgpt.ru/api/file-server/photos/8e6492a3a79ecebefbacc2b547e8bead81c1da76b48e1dd9f9baec8fa671ae4d.png'
  constructor(id, name, type, stack, photo, skills) {
    this.id = id
    this.name = name
    this.type = type
    this.stack = stack
    this.photo = photo
    this.skills = skills
  }
}

export { Resume }
