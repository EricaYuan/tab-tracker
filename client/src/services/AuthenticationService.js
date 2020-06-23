import Api from './Api'

export default{
  register (credentials) {
    return Api().post('register', credentials)
  }
}
// this is how we call this method from another file
// AuthenticationService.register({
//     emil: 'testing@gmail.com',
//     password: '123456'
// })
