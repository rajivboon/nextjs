import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

class Auth0 {
        constructor() {

            this.auth0 = new auth0.WebAuth({
            domain: 'quickmarriages.auth0.com',
            clientID: '0ijPBeMRqJHNBxvQoQ9BeI7tde5qLqnQ',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
          });
          this.login =this.login.bind(this);
          this.logout = this.logout.bind(this);
          this.handleAuthentication = this.handleAuthentication.bind(this);
          // this.isAuthenticated = this.isAuthenticated.bind(this);
        }
        handleAuthentication() {
          return new Promise((resolve, reject) => {
            // debugger;
            
            this.auth0.parseHash((err, authResult) => {
              if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                resolve();
              } else if (err) {
                reject(err);
                console.log((undefined, "setsession handleauthentitation"));
               
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

          this.auth0.logout({
            returnTo: 'http://localhost:3000',
            clientID: '0ijPBeMRqJHNBxvQoQ9BeI7tde5qLqnQ'
          })
        }
      

  login() {
    this.auth0.authorize();
  }

  // isAuthenticated() {
  // // Check whether the current time is past the
  // // access token's expiry time
  //   const expiresAt = Cookies.getJSON('expiresAt');
  //   debugger;
  // // console.log (new Date().getTime() < expiresAt);
  // return new Date().getTime() < expiresAt;
  // }

  verifyToken(token) {
    if (token) { 

      const decodedToken = jwt.decode(token);
      const expiresAt = decodedToken.exp * 1000;

      return (decodedToken && new Date().getTime() < expiresAt) ? decodedToken : undefined;
    }
    return undefined;
  }

  clientAuth() {
    const token = Cookies.getJSON('jwt');
    const verifiedToken = this.verifyToken(token);

    return token;
  }

  serverAuth(req){
  if (req.headers.cookie) {
    
    const tokenCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
        
    if (!tokenCookie) { return console.log(undefined,"servercookie")};
    
    const token = tokenCookie.split('=')[1];
    const verifiedToken = this.verifyToken(token);
    return verifiedToken;

    // console.log(undefined);   
    // const cookies = req.headers.cookie;
    // console.log(cookies);
    // const splitedCookies = cookies.split(';');
    // console.log(splitedCookies);
    // const expiresAtCookie = splitedCookies.find(c => c.trim().startsWith('expiresAt='));
    // console.log(expiresAtCookie);
    // if (!expiresAtCookie) { return undefined};
    // const expiresAtArray = expiresAtCookie.split('=');
    // console.log(expiresAtArray);
    // const expiresAt = expiresAtArray[1];
    // console.log(expiresAt);
    // return new Date().getTime() < expiresAt;

    }    
    return undefined;
  }

}


 const auth0Client = new Auth0();

 export default auth0Client;