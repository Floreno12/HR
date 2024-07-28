// import React, {useState, useRef} from 'react';
// import {useNavigate} from 'react-router-dom';
// import { Form, Input, Button, Card, Typography } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import axios from 'axios';
// import {Toast} from 'primereact/toast';
// import 'antd/dist/reset.css';

// const { Title } = Typography;

// const SignUp = () => {
//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };

//   const navigate = useNavigate();
//   const [formData, setData] = useState({ username: '', password: '' })
//   const toast = useRef(null);

//   const showSuccess = (message) => {
// 		toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
// 	}

//   const showError = (message) => {
// 		toast.current.clear();
// 		toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
// 	}

// const handelSubmit = async (event) => {
//   event.preventDefault()

//    try {
   
//     axios.post('/signup', formData)
//     .then(response => {
//         if(response.data.success){
//             navigate('/login');
//         }else{
//             showError('Error');
//         }
//     })

//     if(request.data.success){
//       showSuccess('Loggin in Successful');
     
//       navigate('/');
//     }
   

//    } catch (error){
    
// console.error(error);
//    }
// }


// const handleInputChange = (e) => {
//     if (e && e.target) {
//         const { name, value } = e.target;
//         setData({ ...formData, [name]: value });
//     }
// };


//   return (
//     <div style={{
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       background: '#e6f7ff' // Light blue background to match the main page
//     }}>
//       <Toast ref = {toast}/>
//       <Card style={{
//         width: 400,
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//         borderRadius: '8px',
//         padding: '2rem',
//         backgroundColor: '#fff'
//       }}>
//         <Title level={2} style={{
//           textAlign: 'center',
//           color: '#007bff' // Primary color to match the main page
//         }}>SignUp</Title>
//         <Form
//           name="normal_login"
//           initialValues={{ remember: true }}
//           onFinish={onFinish}
//         >
//           <Form.Item
//             name="username"
//             rules={[{ required: true, message: 'Please input your Username!' }]}
//           >
//             <Input
//               prefix={<UserOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
//               placeholder="Username"
//             />
//           </Form.Item>
//           <Form.Item
//             name="password"
//             rules={[{ required: true, message: 'Please input your Password!' }]}
//           >
//             <Input
//               prefix={<LockOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
//               type="password"
//               placeholder="Password"
//               value = {formData.username} 
//               onChange = {handleInputChange}
//             />
//           </Form.Item>
//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               style={{
//                 width: '100%',
//                 backgroundColor: '#007bff', // Primary color to match the main page
//                 border: 'none',
//                 borderRadius: '5px'
//               }}
//             >
//               SignUp
//             </Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default SignUp;







import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import 'antd/dist/reset.css';

const { Title } = Typography;

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const toast = useRef(null);

  const showSuccess = (message) => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
  }

  const showError = (message) => {
    toast.current.clear();
    toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
  }

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/signup', values);
      if (response.data.success) {
        showSuccess('User created successfully');
        navigate('/login');
      } else {
        showError('Error creating user');
      }
    } catch (error) {
      console.error(error);
      showError('Error creating user');
    }
  }

  const handleInputChange = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#e6f7ff' // Light blue background to match the main page
    }}>
      <Toast ref={toast} />
      <Card style={{
        width: 400,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        padding: '2rem',
        backgroundColor: '#fff'
      }}>
        <Title level={2} style={{
          textAlign: 'center',
          color: '#007bff' // Primary color to match the main page
        }}>SignUp</Title>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: '100%',
                backgroundColor: '#007bff', // Primary color to match the main page
                border: 'none',
                borderRadius: '5px'
              }}
            >
              SignUp
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignUp;
