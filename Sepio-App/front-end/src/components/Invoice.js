// import React, { useState, useEffect } from 'react';
// import 'antd/dist/reset.css';
// import { Avatar, Layout, Input, List } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { Button as PrimeButton } from 'primereact/button';
// import { IconField } from 'primereact/iconfield';
// import { InputIcon } from 'primereact/inputicon';
// import { InputText } from 'primereact/inputtext';
// import { Toolbar } from 'primereact/toolbar';
// import axios from 'axios';

// const { Sider, Content } = Layout;

// const Invoice = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch users from the API
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('/api/users');
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const generateInvoice = async (employeeName) => {
//     try {
//       const response = await axios.post('/api/generate-invoice', { employeeName });
//       const { invoiceUrl } = response.data;
//       window.open(invoiceUrl, '_blank');
//     } catch (error) {
//       console.error('Error generating invoice:', error);
//     }
//   };

//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchTerm)
//   );

//   const startContent = (
//     <React.Fragment>
//       <PrimeButton
//         icon="pi pi-plus"
//         style={{ backgroundColor: '#007bff', borderRadius: '5px 0px 0px 5px', color: 'white' }}
//         className="mr-2"
//       />
//       <PrimeButton
//         icon="pi pi-upload"
//         style={{ backgroundColor: '#007bff', borderRadius: '0 5px 5px 0', color: 'white' }}
//       />
//     </React.Fragment>
//   );

//   const centerContent = (
//     <>
//       <IconField iconPosition="left">
//         <InputIcon className="pi pi-search" />
//         <InputText
//           placeholder="Search Users"
//           onChange={handleSearchChange}
//           style={{ maxWidth: '30%' }}
//         />
//       </IconField>
//     </>
//   );

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider width={300} style={{ backgroundColor: '#007bff', color: '#fff' }}>
//         <div style={{ padding: '1rem', textAlign: 'center' }}>
//           <Avatar size={100} icon={<UserOutlined />} style={{ marginBottom: '1rem' }} />
//           <h3>Denis Gaidai</h3>
//         </div>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-home" style={{ marginRight: '0.5rem' }}></i> Dashboard
//             </button>
//           </li>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-cog" style={{ marginRight: '0.5rem' }}></i> Settings
//             </button>
//           </li>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-user" style={{ marginRight: '0.5rem' }}></i> Employees
//             </button>
//           </li>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-sign-out" style={{ marginRight: '0.5rem' }}></i> Logout
//             </button>
//           </li>
//         </ul>
//       </Sider>
//       <Layout>
//         <Toolbar start={startContent} center={centerContent} end={<div />} />
//         <Content style={{ padding: '2rem' }}>
            
//           <List
//             itemLayout="horizontal"
//             dataSource={filteredUsers}
//             renderItem={(user) => (
//               <List.Item
//                 actions={[
//                   <PrimeButton
//                     label="Generate Invoice"
//                     onClick={() => generateInvoice(user.name)}
//                     style={{ backgroundColor: '#007bff', color: 'white' }}
//                   />
                  
//                 ]}
                
//               >
//                 <List.Item.Meta
//                   avatar={<Avatar src={user.avatar || <UserOutlined />} />}
//                   title={user.name}
//                 />
//               </List.Item>
//             )}
//           />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Invoice;


















// import React, { useState, useEffect } from 'react';
// import 'antd/dist/reset.css';
// import { Avatar, Layout, Input, List } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { Button as PrimeButton } from 'primereact/button';
// import { IconField } from 'primereact/iconfield';
// import { InputIcon } from 'primereact/inputicon';
// import { InputText } from 'primereact/inputtext';
// import { Toolbar } from 'primereact/toolbar';
// import axios from 'axios';

// const { Sider, Content } = Layout;

// const Invoice = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch users from the API
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('/api/users');
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const generateInvoice = async (employeeName) => {
//     try {
//       const response = await axios.post('/api/generate-invoice', { employeeName });
//       const { invoiceUrl } = response.data;
//       window.open(invoiceUrl, '_blank');
//     } catch (error) {
//       console.error('Error generating invoice:', error);
//     }
//   };

//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchTerm)
//   );

//   const startContent = (
//     <React.Fragment>
//       <PrimeButton
//         icon="pi pi-plus"
//         style={{ backgroundColor: '#007bff', borderRadius: '5px 0px 0px 5px', color: 'white' }}
//         className="mr-2"
//       />
//       <PrimeButton
//         icon="pi pi-upload"
//         style={{ backgroundColor: '#007bff', borderRadius: '0 5px 5px 0', color: 'white' }}
//       />
//     </React.Fragment>
//   );

//   const centerContent = (
//     <>
//       <IconField iconPosition="left">
//         <InputIcon className="pi pi-search" />
//         <InputText
//           placeholder="Search Users"
//           onChange={handleSearchChange}
//           style={{ maxWidth: '30%' }}
//         />
//       </IconField>
//     </>
//   );

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider width={300} style={{ backgroundColor: '#007bff', color: '#fff' }}>
//         <div style={{ padding: '1rem', textAlign: 'center' }}>
//           <Avatar size={100} icon={<UserOutlined />} style={{ marginBottom: '1rem' }} />
//           <h3>Denis Gaidai</h3>
//         </div>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-home" style={{ marginRight: '0.5rem' }}></i> Dashboard
//             </button>
//           </li>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-cog" style={{ marginRight: '0.5rem' }}></i> Settings
//             </button>
//           </li>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-user" style={{ marginRight: '0.5rem' }}></i> Employees
//             </button>
//           </li>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-sign-out" style={{ marginRight: '0.5rem' }}></i> Logout
//             </button>
//           </li>
//         </ul>
//       </Sider>
//       <Layout>
//         <Toolbar start={startContent} center={centerContent} end={<div />} />
//         <Content style={{ padding: '2rem' }}>
//           <List
//             itemLayout="horizontal"
//             dataSource={filteredUsers}
//             renderItem={(user) => (
//               <List.Item
//                 actions={[
//                   <PrimeButton
//                     label="Generate Invoice"
//                     onClick={() => generateInvoice(user.name)}
//                     style={{ backgroundColor: '#007bff', color: 'white' }}
//                   />
//                 ]}
//               >
//                 <List.Item.Meta
//                   avatar={<Avatar style = {{marginLeft: '100px', backgroundColor: '#007bff'}} src={user.avatar || <UserOutlined />} />}
//                   title = {user.name}
//                 />
                
//               </List.Item>
//             )}
//           />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Invoice;













// import React, { useState, useEffect } from 'react';
// import 'antd/dist/reset.css';
// import { Avatar, Layout, Input, List } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { Button as PrimeButton } from 'primereact/button';
// import { IconField } from 'primereact/iconfield';
// import { InputIcon } from 'primereact/inputicon';
// import { InputText } from 'primereact/inputtext';
// import { Toolbar } from 'primereact/toolbar';
// import axios from 'axios';
// import { useNavigate, NavLink } from 'react-router-dom';
// const { Sider, Content } = Layout;

// const Invoice = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();



  

//   useEffect(() => {
//     // Fetch users from the API
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('/api/users');
//         setUsers(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const generateInvoice = async (employeeName) => {
//     try {
//       const response = await axios.post('/api/generate-invoice', { employeeName });
//       const { invoiceUrl } = response.data;
//       window.open(invoiceUrl, '_blank');
//     } catch (error) {
//       console.error('Error generating invoice:', error);
//     }
//   };
  

//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchTerm)
//   );

//   const startContent = (
//     <React.Fragment>
//       <PrimeButton
//         icon="pi pi-plus"
//         style={{ backgroundColor: '#007bff', borderRadius: '5px 0px 0px 5px', color: 'white' }}
//         className="mr-2"
//       />
//       <PrimeButton
//         icon="pi pi-upload"
//         style={{ backgroundColor: '#007bff', borderRadius: '0 5px 5px 0', color: 'white' }}
//       />
//     </React.Fragment>
//   );

//   const centerContent = (
//     <>
//       <IconField iconPosition="left">
//         <InputIcon className="pi pi-search" />
//         <InputText
//           placeholder="Search Users"
//           onChange={handleSearchChange}
//           style={{ maxWidth: '100%' }}
//         />
//       </IconField>
//     </>
//   );


//   function logout () {
//     navigate('/login')
//   }

//   function emp () {
//     navigate('/employees');
//   }

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider width={300} style={{ backgroundColor: '#007bff', color: '#fff' }}>
//         <div style={{ padding: '1rem', textAlign: 'center' }}>
//           <Avatar size={100} icon={<UserOutlined />} style={{ marginBottom: '1rem' }} />
//           <h3>Denis Gaidai</h3>
//         </div>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-home" style={{ marginRight: '0.5rem' }}></i> Dashboard
//             </button>
//           </li>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-cog" style={{ marginRight: '0.5rem' }}></i> Settings
//             </button>
//           </li>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//             onClick = {emp}
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-user"  style={{ marginRight: '0.5rem' }}></i> Employees
//             </button>
//           </li>

//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
            
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-wallet" style={{ marginRight: '0.5rem' }}></i> invoices
//             </button>
//           </li>
        
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//             onClick = {logout}
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-sign-out" style={{ marginRight: '0.5rem' }}></i> Logout
//             </button>
//           </li>
          
//         </ul>
//       </Sider>
//       <Layout>
//         <Toolbar start={startContent} center={centerContent} end={<div />} />
//         <Content style={{ padding: '2rem' }}>
//           <List
//             itemLayout="horizontal"
//             dataSource={filteredUsers}
//             renderItem={(user) => (
//               <List.Item
//                 actions={[
//                   <PrimeButton
//                     label="Generate Invoice"
//                     onClick={() => generateInvoice(user.name)}
//                     style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '5px 5px 5px 5px'  }}
//                   />
//                 ]}
//               >
//                 <List.Item.Meta
//                   avatar={
//                     <Avatar
//                       src={user.avatar || <UserOutlined />}
//                       style={{ backgroundColor: '#295bac' }}
//                     />
//                   }
//                   title={<div style={{ display: 'flex', alignItems: 'center' }}><span style={{ marginLeft: 8 }}>{user.name}</span></div>}
//                   description={ <div style = {{marginTop: '-25px'}}>Email: {user.email}</div>}
//                 />
//               </List.Item>
//             )}
//           />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Invoice;




















// import React, { useState, useEffect } from 'react';
// import 'antd/dist/reset.css';
// import { Avatar, Layout, Input, List } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
// import { Button as PrimeButton } from 'primereact/button';
// import { IconField } from 'primereact/iconfield';
// import { InputIcon } from 'primereact/inputicon';
// import { InputText } from 'primereact/inputtext';
// import { Toolbar } from 'primereact/toolbar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const { Sider, Content } = Layout;

// const Invoice = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch users from the API
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('/api/users');
//         setUsers(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const generateInvoice = async (employeeName) => {
//     try {
//       const response = await axios.post('/api/generate-invoice', { employeeName });
//       const { invoiceUrl } = response.data;
//       window.open(invoiceUrl, '_blank');
//     } catch (error) {
//       console.error('Error generating invoice:', error);
//     }
//   };

//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchTerm)
//   );

//   const startContent = (
//     <React.Fragment>
//       <PrimeButton
//         icon="pi pi-plus"
//         style={{ backgroundColor: '#007bff', borderRadius: '5px 0px 0px 5px', color: 'white' }}
//         className="mr-2"
//       />
//       <PrimeButton
//         icon="pi pi-upload"
//         style={{ backgroundColor: '#007bff', borderRadius: '0 5px 5px 0', color: 'white' }}
//       />
//     </React.Fragment>
//   );

//   const centerContent = (
//     <>
//       <IconField iconPosition="left">
//         <InputIcon className="pi pi-search" />
//         <InputText
//           placeholder="Search Users"
//           onChange={handleSearchChange}
//           style={{ maxWidth: '100%' }}
//         />
//       </IconField>
//     </>
//   );

//   function logout () {
//     navigate('/login')
//   }

//   function emp () {
//     navigate('/employees');
//   }

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider width={300} style={{ backgroundColor: '#007bff', color: '#fff' }}>
//         <div style={{ padding: '1rem', textAlign: 'center' }}>
//           <Avatar size={100} icon={<UserOutlined />} style={{ marginBottom: '1rem' }} />
//           <h3>Denis Gaidai</h3>
//         </div>
//         <ul style={{ listStyleType: 'none', padding: 0 }}>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-home" style={{ marginRight: '0.5rem' }}></i> Dashboard
//             </button>
//           </li>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-cog" style={{ marginRight: '0.5rem' }}></i> Settings
//             </button>
//           </li>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               onClick={emp}
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-user" style={{ marginRight: '0.5rem' }}></i> Employees
//             </button>
//           </li>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-wallet" style={{ marginRight: '0.5rem' }}></i> invoices
//             </button>
//           </li>
//           <li style={{ marginBottom: '1rem', width: '100%' }}>
//             <button
//               onClick={logout}
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 color: '#fff',
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: '0.5rem 1rem',
//                 cursor: 'pointer',
//               }}
//             >
//               <i className="pi pi-sign-out" style={{ marginRight: '0.5rem' }}></i> Logout
//             </button>
//           </li>
//         </ul>
//       </Sider>
//       <Layout>
//         <Toolbar start={startContent} center={centerContent} end={<div />} />
//         <Content style={{ padding: '2rem' }}>
//           <List
//             itemLayout="horizontal"
//             dataSource={filteredUsers}
//             renderItem={(user) => (
//               <List.Item
//                 actions={[
//                   <PrimeButton
//                     label="Generate Invoice"
//                     onClick={() => generateInvoice(user.name)}
//                     style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '5px' }}
//                   />
//                 ]}
//                 style={{ padding: '0', borderBottom: '1px solid #ddd' }}
//               >
//                 <List.Item.Meta
//                   avatar={
//                     <Avatar
//                       src={user.avatar || <UserOutlined />}
//                       style={{ backgroundColor: '#295bac' }}
//                     />
//                   }
//                   title={
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       width: '100%',
//                       borderCollapse: 'collapse',
//                     }}>
//                       <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '10px', borderRight: '1px solid #000' }}>
//                         <span>{user.name}</span>
//                       </div>
//                       <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '10px', borderRight: '1px solid #000' }}>
//                         <span>Email: {user.email}</span>
//                       </div>
//                       <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
//                         <PrimeButton
//                           label="Generate Invoice"
//                           onClick={() => generateInvoice(user.name)}
//                           style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '5px' }}
//                         />
//                       </div>
//                     </div>
//                   }
//                 />
//               </List.Item>
//             )}
            
            
            
            
            
            
            
//           />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Invoice;












import React, { useState, useEffect } from 'react';
import 'antd/dist/reset.css';
import { Avatar, Layout, Input, List, Menu, Upload, message, Dropdown } from 'antd';
import { UserOutlined, UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button as PrimeButton } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const { Sider, Content } = Layout;

const Invoice = ({icon_username}) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    avatarUrl: ''
  })




  const handleDeleteAvatar = () => {
    axios.post(`/api/user/${icon_username}/delete-avatar`)
      .then(response => {
        setFormData(prevFormData => ({
          ...prevFormData,
          avatarUrl: null,
        }));
        message.success('Avatar deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting avatar:', error);
        message.error('Failed to delete avatar');
      });
  };
  

  const handleFileChange = (file) => {
    const formData = new FormData();
    formData.append('avatar', file);
  
    axios.post(`/api/user/${icon_username}/avatar`, formData)
      .then(response => {
        const updatedAvatarUrl = response.data.avatarUrl;
        setFormData(prevFormData => ({
          ...prevFormData,
          avatarUrl: updatedAvatarUrl,
        }));
        message.success('Avatar updated successfully');
      })
      .catch(error => {
        console.error('Error updating avatar:', error);
        message.error('Failed to update avatar');
      });
  };
  





  useEffect(() => {
    if (icon_username) {
      fetch(`/api/user/${icon_username}`)
        .then(response => response.json())
        .then(data => {
          setFormData({ avatarUrl: data.avatarUrl });
          console.log(data.avatarUrl);
        })
        .catch(error => {
          console.log('Error fetching user privileges', error);
        });
    }
  }, [icon_username]);





  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UploadOutlined />}>
        <Upload
          showUploadList={false}
          beforeUpload={(file) => {
            handleFileChange(file);
            return false;
          }}
        >
          <span>Change Photo</span>
        </Upload>
      </Menu.Item>
      <Menu.Item key="2" icon={<DeleteOutlined />} onClick={handleDeleteAvatar}>
        Delete Photo
      </Menu.Item>
    </Menu>
  );
  




  useEffect(() => {
    // Fetch users from the API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const generateInvoice = async (employeeName) => {
    try {
      const response = await axios.post('/api/generate-invoice', { employeeName });
      const { invoiceUrl } = response.data;
      window.open(invoiceUrl, '_blank');
    } catch (error) {
      console.error('Error generating invoice:', error);
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm)
  );

  const startContent = (
    <React.Fragment>
      <PrimeButton
        icon="pi pi-plus"
        style={{ backgroundColor: '#007bff', borderRadius: '5px 0px 0px 5px', color: 'white' }}
        className="mr-2"
      />
      <PrimeButton
        icon="pi pi-upload"
        style={{ backgroundColor: '#007bff', borderRadius: '0 5px 5px 0', color: 'white' }}
      />
    </React.Fragment>
  );

  const centerContent = (
    <>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          placeholder="Search Users"
          onChange={handleSearchChange}
          style={{ maxWidth: '100%' }}
        />
      </IconField>
    </>
  );

  function logout () {
    navigate('/login')
  }

  function emp () {
    navigate('/employees');
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={300} style={{ backgroundColor: '#007bff', color: '#fff' }}>
        <div style={{ padding: '1rem', textAlign: 'center' }}>
        <Dropdown overlay={menu} trigger={['click']}>
  <Avatar
    size={100}
    icon={!formData.avatarUrl && <UserOutlined />}
    src={formData.avatarUrl}
    style={{ marginBottom: '1rem', cursor: 'pointer' }}
  >
    {!formData.avatarUrl && icon_username.charAt(0)}
  </Avatar>
</Dropdown>

          <h3>Denis Gaidai</h3>
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem', width: '100%' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                textAlign: 'left',
                width: '100%',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
            >
              <i className="pi pi-home" style={{ marginRight: '0.5rem' }}></i> Dashboard
            </button>
          </li>
          <li style={{ marginBottom: '1rem', width: '100%' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                textAlign: 'left',
                width: '100%',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
            >
              <i className="pi pi-cog" style={{ marginRight: '0.5rem' }}></i> Settings
            </button>
          </li>
          <li style={{ marginBottom: '1rem', width: '100%' }}>
            <button
              onClick={emp}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                textAlign: 'left',
                width: '100%',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
            >
              <i className="pi pi-user" style={{ marginRight: '0.5rem' }}></i> Employees
            </button>
          </li>
          <li style={{ marginBottom: '1rem', width: '100%' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                textAlign: 'left',
                width: '100%',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
            >
              <i className="pi pi-wallet" style={{ marginRight: '0.5rem' }}></i> invoices
            </button>
          </li>
          <li style={{ marginBottom: '1rem', width: '100%' }}>
            <button
              onClick={logout}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                textAlign: 'left',
                width: '100%',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
              }}
            >
              <i className="pi pi-sign-out" style={{ marginRight: '0.5rem' }}></i> Logout
            </button>
          </li>
        </ul>
      </Sider>
      <Layout>
        <Toolbar start={startContent} center={centerContent} end={<div />} />
        <Content style={{ padding: '2rem' }}>
          <List
            itemLayout="horizontal"
            dataSource={filteredUsers}
            renderItem={(user) => (
              <List.Item
                actions={[
                  <PrimeButton
                    label="Generate Invoice"
                    onClick={() => generateInvoice(user.name)}
                    style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '5px' }}
                  />
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={user.avatarUrl || <UserOutlined />}
                      style={{ backgroundColor: '#295bac' }}
                    />
                  }
                  title={
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                        <span>{user.name}</span>
                      </div>
                      <div style={{ borderLeft: '2px solid #333', height: '24px', margin: '0 8px' }}></div>
                      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                        <span>Email: {user.email}</span>
                      </div>
                      {/* <div style={{ borderLeft: '2px solid #333', height: '24px', margin: '0 8px' }}></div>
                      <PrimeButton
                        label="Generate Invoice"
                        onClick={() => generateInvoice(user.name)}
                        style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '5px' }}
                      /> */}
                    </div>
                  }
                />
              </List.Item>
            )}
            
            
            
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Invoice;