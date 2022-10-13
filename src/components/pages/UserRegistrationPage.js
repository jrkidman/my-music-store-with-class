/* eslint-disable max-len */
import {
  Box, Button, TextField, Typography,
} from '@mui/material';
// import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../redux-state/userSlice';
import Axios from '../../utils/Axios';
import Layout from '../layout/Layout';

function UserRegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const [userRegistrationForm, setUserRegistrationForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    profilePicture: '',
  });

  const handleSubmit = async (event) => {
    // make sure form is correct, validation
    event.preventDefault();

    try {
    // if everything is valid, submit the network request
      const response = await Axios.post('register-user', {
        ...userRegistrationForm,
      });

      const { user } = response.data;
      dispatch(signIn(user));
      navigate('/');
    } catch (e) {
      // potentially can send a copy of your errors to a database for logging
      setError(e.message);
    }
  };

  return (
    <Layout>
      <form action="submit" onSubmit={handleSubmit}>
        <Box mb={4}>
          <TextField
            id="firstName"
            label="first name"
            autoComplete="given-name"
            value={userRegistrationForm.firstName}
            onChange={(event) => setUserRegistrationForm({ ...userRegistrationForm, firstName: event.target.value })}
            required
          />
        </Box>

        <Box mb={4}>
          <TextField
            id="lastName"
            label="last name"
            autoComplete="family-name"
            value={userRegistrationForm.lastName}
            onChange={(event) => setUserRegistrationForm({ ...userRegistrationForm, lastName: event.target.value })}
            required
          />
        </Box>

        <Box mb={4}>
          <TextField
            id="email"
            label="email"
            autoComplete="email"
            value={userRegistrationForm.email}
            onChange={(event) => setUserRegistrationForm({ ...userRegistrationForm, email: event.target.value })}
            required
          />
        </Box>

        <Box mb={4}>
          <TextField
            id="password"
            label="password"
            type="password"
            value={userRegistrationForm.password}
            onChange={(event) => setUserRegistrationForm({ ...userRegistrationForm, password: event.target.value })}
            required
          />
        </Box>

        <Box mb={4}>
          <TextField
            id="profilePicture"
            label="profilePicture"
            value={userRegistrationForm.profilePicture}
            onChange={(event) => setUserRegistrationForm({ ...userRegistrationForm, profilePicture: event.target.value })}
            required
          />
        </Box>
        {error && (
        <Box border="1px solid red" borderRadius="5px" p={3} pb={2}>
          <Typography textAlign="center">{error}</Typography>

        </Box>

        )}
        <Box>
          <Button type="submit">Submit</Button>

        </Box>
      </form>
    </Layout>
  );
}

export default UserRegistrationPage;
