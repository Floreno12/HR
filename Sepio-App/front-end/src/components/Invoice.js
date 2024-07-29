import React, { useState } from 'react';
import 'antd/dist/reset.css';
import { Avatar, Layout, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button as PrimeButton } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';
import axios from 'axios';

const { Header, Sider, Content } = Layout;

const Invoice = () => {
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const handleEmployeeChange = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const generateInvoice = async () => {
    try {
      const response = await axios.post('/api/generate-invoice', { employeeName: selectedEmployee });
      const { invoiceUrl } = response.data;
      window.open(invoiceUrl, '_blank');
    } catch (error) {
      console.error('Error generating invoice:', error);
    }
  };

  const items = [
    {
      label: 'Update',
      icon: 'pi pi-refresh',
    },
    {
      label: 'Delete',
      icon: 'pi pi-times',
    },
  ];

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
        <InputText placeholder="Search" />
      </IconField>
    </>
  );

  const endContent = (
    <PrimeButton
      label="Invoice"
      icon="pi pi-check"
      style={{
        color: 'white',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px 5px 5px 5px',
      }}
      onClick={generateInvoice}
    />
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={300} style={{ backgroundColor: '#007bff', color: '#fff' }}>
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <Avatar size={100} icon={<UserOutlined />} style={{ marginBottom: '1rem' }} />
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
              <i className="pi pi-sign-out" style={{ marginRight: '0.5rem' }}></i> Logout
            </button>
          </li>
        </ul>
      </Sider>
      <Layout>
        <Toolbar start={startContent} center={centerContent} end={endContent} />
        <Content style={{ padding: '2rem' }}>
          <Input placeholder="Enter Employee Name" onChange={handleEmployeeChange} style={{ maxWidth: '30%' }} />
          <PrimeButton label="Generate Invoice" onClick={generateInvoice} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Invoice;