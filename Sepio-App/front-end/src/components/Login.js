// import React, {useRef} from 'react';
// import {useNavigate} from 'react-router-dom';
// import { Form, Input, Button, Card, Typography } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import axios from 'axios';
// import {Toast} from 'primereact/toast';
// import 'antd/dist/reset.css';
// import { useState } from 'react';

// const { Title } = Typography;

// const LoginPage = ({setUsername}) => {
//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };

//   const navigate = useNavigate();
//   const [data, setData] = useState({ username: '', password: '' })
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
//     const request = await axios.post('/login', {
//     username: data.username,
//     password: data.password
//     })

//     if(request.data.success){
//       showSuccess('Loggin in Successful');
//       setUsername(data.username);
//       navigate('/');
//     }else{
//       setUsername(data.username);
//     }

//    }catch (error){

//     console.log(error);

//    }
// }



// const handleInputChange = (e) => {
//   if (e && e.target) {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   }
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
//         }}>Login</Title>
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
//               value = {data.username}
//               onChange = {handleInputChange}
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
//               value = {data.password}
//               onChange= {handleInputChange}
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
//               Log in
//             </Button>
//           </Form.Item>
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default LoginPage;




import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import 'antd/dist/reset.css';

const { Title } = Typography;

const LoginPage = () => {
  //   const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };
  const navigate = useNavigate();
  const [data, setData] = useState({ name: '', password: '' });
  const toast = useRef(null);




  const showSuccess = (message) => {
    if (toast.current) {
      toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    }
  };

  const showError = (message) => {
    if (toast.current) {
      toast.current.clear();
      toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
    }
  };




  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('/login', {
        name: values.name,
        password: values.password,
      });

      if (response.data.success) {

        showSuccess('Success')
       
       console.log('i get the success');
        navigate('/');
      } else {
        showError('Authentication failed')
        console.log('bad uthenticate')
      }
    } catch (error) {
      showError('Authentication failed')
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#e6f7ff'
    }}>

      <Toast ref= {toast}/>
      
      <Card style={{
        width: 400,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        padding: '2rem',
        backgroundColor: '#fff'
      }}>
        <Title level={2} style={{
          textAlign: 'center',
          color: '#007bff'
        }}>Login</Title>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
              placeholder="Username"
              value={data.name}
              onChange={handleInputChange}
              name="name"
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
              value={data.password}
              onChange={handleInputChange}
              name="password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: '100%',
                backgroundColor: '#007bff',
                border: 'none',
                borderRadius: '5px'
              }}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;

