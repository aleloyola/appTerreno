export class AuthService {
  signin(email: string, password: string) {
    console.log("Intentando logear con:"+email+"+"+password);
    return true;
  }

  logout() {
    console.log("deslogeando");
    return true;
  }

  getActiveUser() {
    console.log("el usuario activo es:");
    return true;
  }
}
