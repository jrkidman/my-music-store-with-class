import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn, signOut } from '../../redux-state/userSlice';
import Axios from '../../utils/Axios';
import Layout from '../layout/Layout';

function SignInPage() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = async () => {
    // call the backend with the credentials data
    const response = await Axios.post('/sign-in', { credentials: signInForm });

    const fetchedUser = response.data.user;
    // insert the user response into the state
    dispatch(signIn(fetchedUser));
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  if (user) {
    return (
      <Layout user={user}>
        <Box mb={4}>
          <Typography>
            Hi
            {' '}
            {user.firstName}
            !
          </Typography>
        </Box>
        <Box>
          <Button variant="contained" onClick={handleSignOut}>Sign out</Button>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box mb={4}>
        <Typography>Sign In</Typography>
      </Box>
      <Box mb={4}>
        <TextField
          id="email"
          label="Email"
          value={signInForm.email}
          onChange={(event) => setSignInForm({ ...signInForm, email: event.target.value })}
        />
      </Box>
      <Box mb={4}>
        <TextField
          id="password "
          label="Password"
          type="password"
          value={signInForm.password}
          onChange={(event) => setSignInForm({ ...signInForm, password: event.target.value })}
        />
      </Box>
      <Box>
        <Button variant="contained" onClick={onSubmit}>Sign In</Button>
      </Box>

      <Box>
        <Link to="/register-user">
          <Typography>Create New Account</Typography>
        </Link>
      </Box>

    </Layout>
  );
}

export default SignInPage;
