import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

class Auth0 {
        constructor() {

            this.auth0 = new auth0.WebAuth({
            domain: 'echocorp.auth0.com',
            clientID: 'N904Pe1iE083z0rAc2kfJYu3qoylL597',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid'
          });
          this.login =this.login.bind(this);
          this.logout = this.logout.bind(this);
          this.handleAuthentication = this.handleAuthentication.bind(this);
          this.isAuthenticated = this.isAuthenticated.bind(this);
        }
        handleAuthentication() {
         
          return new Promise((resolve, reject) => {

            this.auth0.parseHash((err, authResult) => {
              if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                resolve();
              } else if (err) {
                reject(err);
                console.log(err);
               
              }
            });
          })
        }

        setSession(authResult) {
          // Set isLoggedIn flag in localStorage
          // localStorage.setItem('isLoggedIn', 'true');
          
          // Set the time that the Access Token will expire at
          const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
          // this.accessToken = authResult.accessToken;
          // this.idToken = authResult.idToken;
          // this.expiresAt = expiresAt;
          
          Cookies.set('user', authResult.idTokenPayload);         
          Cookies.set('jwt', authResult.idToken); 
          Cookies.set('expiresAt', expiresAt);
          // navigate to the home route
        }

        logout () {
          Cookies.remove('user');         
          Cookies.remove('jwt'); 
          Cookies.remove('expiresAt');
          // this.accessToken = null;
    // this.idToken = null;
    // this.expiresAt = 0;

          this.auth0.authorize({
            returnTo: '',
            clientID: 'N904Pe1iE083z0rAc2kfJYu3qoylL597'
          })
        }
      

  login() {
    this.auth0.authorize();
  }

  isAuthenticated() {
  // Check whether the current time is past the
  // access token's expiry time
  const expiresAt = Cookies.getJSON('expiresAt');
  console.log (new Date().getTime() < expiresAt);
  return new Date().getTime() < expiresAt;
  }

  clientAuth() {
    return this.isAuthenticated();
  }

  serverAuth(req){
  if (req.headers.cookie) {
    // const expirestAtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('expiresAt='));
    
    
    // if (!expirestAtCookie) { return undefined};
    // const expiresAt = expirestAtCookie.split('=')[1];
   
    const cookies = req.headers.cookie;
    console.log(cookies);
    const splitedCookies = cookies.split(';');
    console.log(splitedCookies);
    const expirestAtCookie = splitedCookies.find(c => c.trim().startsWith('expiresAt='));
    console.log(expirestAtCookie);
    const expiresAtArray = expirestAtCookie.split('=');
    console.log(expiresAtArray);
    const expiresAt = expiresAtArray[1];
    console.log(expiresAt)

    return new Date().getTime() < expiresAt;
  }    
  }

}


 const auth0Client = new Auth0();

 export default auth0Client;