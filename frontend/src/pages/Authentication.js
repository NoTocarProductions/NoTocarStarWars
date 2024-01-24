import { json, redirect } from 'react-router';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;


// AUTHENTICATION ACTION
// _______________________________________________

export async function action({request}) {
    // get the correct mode first from the URL so we know if we're loggin in or signing up
    const searchparams = new URL(request.url).searchParams; // check the searchparams in the url (=> signup/login)
    const mode = searchparams.get('mode') || 'login';
    if (mode !== 'login' && mode !== 'signup') {
      throw json({message: 'Unsupported mode'}, {status: 422});
    }
  
  
    // retrieve the entered data from the form
    const enteredData = await request.formData();
    const authData = {
      email: enteredData.get('email'),
      password: enteredData.get('password')
    };
  
  
    // send a request to the backend
    const response = await fetch('http://localhost:8080/' + mode, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(authData)
    });
    //check for common errors 
    if (response.status === 422 || response.status === 401) {
      return response;
    }
    //additional check for other errors
    if (!response.ok) {
      const errorData = await response.json(); //edited
      console.error('Unexpected error:', errorData); //edited
      throw json({message: 'Could not authenticate user'}, {status: 500});
    }
  
    // STORE THE AUTHENTICATION TOKEN SOMEWHERE
    const resData = await response.json();
    const token = resData.token;
    localStorage.setItem('token', token);
    // set the expiration for the token
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1)
    localStorage.setItem('expiration', expiration.toISOString());
  
  
    // if logged in => redirect to start page
    return redirect('/');
  }