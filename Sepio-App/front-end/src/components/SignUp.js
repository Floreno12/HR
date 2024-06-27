



// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import SepioLogo from './../image/Sepio_Logo.png';
// import {Toast} from 'primereact/toast';
// import axios from 'axios';

// export default function SignUp() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const [status, setStatus] = useState('initial');
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({severity: 'success', summary: 'Success', detail: message, life: 3000});
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setStatus('loading');


//     axios.post('/signup', formData)
//       .then(response => {
//         if (response.data.success) {
//           showSuccess('User created successfully');
//           setTimeout(() => {
//           navigate('/checkpassword');
//           }, 1500)
          
//         } else {
//           setStatus('failure');
//         }
//       })
//       .catch(error => {
//         console.error('Sign up error:', error);
//         setStatus('failure');
//       });
//   };

//   const handleLoginRedirect = () => {
//     navigate('/login');
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//     <Toast ref = {toast}/>
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Username</FormLabel>
//           <Input
//           placeholder = "Username"
//             type="text"
//             required
//             value={formData.username}
//             onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//           />
//           <FormLabel>Password</FormLabel>
//           <Input
//           placeholder = "Password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           />
//           <Button
//             loading = {status === 'loading'}
//             variant="solid"
//             color="primary"
//             type="submit"
//             sx={{ marginTop: '20px' }}
//           >
//             Sign Up
//           </Button>
//           {status === 'failure' && (
//             <p style={{ color: 'red' }}>Sign up failed. Please try again.</p>
//           )}
//         </FormControl>
//       </form>
//       <Button
//       variant = 'solid'
//       color = 'secondary'
//       sx = {{marginTop: '20px'}}
//       onClick = {handleLoginRedirect}
//       >
//         Log In
//       </Button>
//     </div>
//   );
// }









// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import SepioLogo from './../image/Sepio_Logo.png';
// import {Toast} from 'primereact/toast';
// import axios from 'axios';

// export default function UpdatePassword() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
//   const [status, setStatus] = useState('initial');
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({severity: 'success', summary: 'Success', detail: message, life: 3000});
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setStatus('loading');

//     if (formData.password !== formData.confirmPassword) {
//       toast.current.show({severity: 'error', summary: 'Error', detail: 'Passwords do not match', life: 3000});
//       setStatus('initial');
//       return;
//     }

//     axios.post('/update-password', { password: formData.password })
//       .then(response => {
//         if (response.data.success) {
//           showSuccess('Password updated successfully');
//           setTimeout(() => {
//             navigate('/checkpassword');
//           }, 1500)
//         } else {
//           setStatus('failure');
//         }
//       })
//       .catch(error => {
//         console.error('Update password error:', error);
//         setStatus('failure');
//       });
//   };

//   const handleLoginRedirect = () => {
//     navigate('/login');
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//       <Toast ref={toast} />
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Password</FormLabel>
//           <Input
//             placeholder="Password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           />
//           <FormLabel>Confirm Password</FormLabel>
//           <Input
//             placeholder="Confirm Password"
//             type="password"
//             required
//             value={formData.confirmPassword}
//             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//           />
//           <Button
//             loading={status === 'loading'}
//             variant="solid"
//             color="primary"
//             type="submit"
//             sx={{ marginTop: '20px' }}
//           >
//             Update Password
//           </Button>
//           {status === 'failure' && (
//             <p style={{ color: 'red' }}>Password update failed. Please try again.</p>
//           )}
//         </FormControl>
//       </form>
//       <Button
//         variant='solid'
//         color='secondary'
//         sx={{ marginTop: '20px' }}
//         onClick={handleLoginRedirect}
//       >
//         Log In
//       </Button>
//     </div>
//   );
// }









// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import SepioLogo from './../image/Sepio_Logo.png';
// import { Toast } from 'primereact/toast';
// import axios from 'axios';

// export default function UpdatePassword() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
//   const [status, setStatus] = useState('initial');
//   const toast = useRef(null);

//   const showSuccess = (message) => {
//     toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setStatus('loading');

//     if (formData.password !== formData.confirmPassword) {
//       toast.current.show({ severity: 'error', summary: 'Error', detail: 'Passwords do not match', life: 3000 });
//       setStatus('initial');
//       return;
//     }

//     axios.post('/update-password', { password: formData.password })
//       .then(response => {
//         if (response.data.success) {
//           showSuccess('Password updated successfully');
//           setTimeout(() => {
//             navigate('/'); // Navigate to checkpassword page
//           }, 1500)
//         } else {
//           setStatus('failure');
//         }
//       })
//       .catch(error => {
//         console.error('Update password error:', error);
//         setStatus('failure');
//       });
//   };

//   const handleLoginRedirect = () => {
//     navigate('/login');
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
//       <Toast ref={toast} />
//       <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Password</FormLabel>
//           <Input
//             placeholder="Password"
//             type="password"
//             required
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           />
//           <FormLabel>Confirm Password</FormLabel>
//           <Input
//             placeholder="Confirm Password"
//             type="password"
//             required
//             value={formData.confirmPassword}
//             onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//           />
//           <Button
//             loading={status === 'loading'}
//             variant="solid"
//             color="primary"
//             type="submit"
//             sx={{ marginTop: '20px' }}
//           >
//             Update Password
//           </Button>
//           {status === 'failure' && (
//             <p style={{ color: 'red' }}>Password update failed. Please try again.</p>
//           )}
//         </FormControl>
//       </form>
//       <Button
//         variant='solid'
//         color='secondary'
//         sx={{ marginTop: '20px' }}
//         onClick={handleLoginRedirect}
//       >
//         Log In
//       </Button>
//     </div>
//   );
// }













import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import SepioLogo from './../image/Sepio_Logo.png';
import { Toast } from 'primereact/toast';
import axios from 'axios';

export default function UpdatePassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [status, setStatus] = useState('initial');
  const toast = useRef(null);

  const showSuccess = (message) => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
  }

  const showError = (message) => {
    toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('loading');

    if (formData.password !== formData.confirmPassword) {
      showError('Passwords do not match');
      setStatus('initial');
      return;
    }

    axios.post('/update-password', { password: formData.password })
      .then(response => {
        if (response.data.success) {
          showSuccess('Password updated successfully');
          setTimeout(() => {
            navigate('/'); // Navigate to login page
          }, 1500)
        } else {
          showError('Password update failed');
          setStatus('failure');
        }
      })
      .catch(error => {
        console.error('Update password error:', error);
        showError('Password update failed');
        setStatus('failure');
      });
  };

  const handleLoginRedirect = () => {
    navigate('/');
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#778899', padding: '40px', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
      <Toast ref={toast} />
      <img src={SepioLogo} alt="Welcome" style={{ marginBottom: '20px', height: 70 }} />
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <FormLabel>Confirm Password</FormLabel>
          <Input
            placeholder="Confirm Password"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
          <Button
            loading={status === 'loading'}
            variant="solid"
            color="primary"
            type="submit"
            sx={{ marginTop: '20px' }}
          >
            Update Password
          </Button>
          {status === 'failure' && (
            <p style={{ color: 'red' }}>Password update failed. Please try again.</p>
          )}
        </FormControl>
      </form>
      <Button
        variant='solid'
        color='secondary'
        sx={{ marginTop: '20px' }}
        onClick={handleLoginRedirect}
      >
        Log In
      </Button>
    </div>
  );
}
