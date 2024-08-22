export class ApiDataProvider {
  data
  get isData() {
    return this.data != null
  }
  get isError() {
    return this.data.status == false
  }
  get Error() {
    return this.data.error
  }
  constructor(data) {
    this.data = data.data
  }
}
