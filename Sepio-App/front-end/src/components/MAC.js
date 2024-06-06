import React, { useState, useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { NavLink } from 'react-router-dom';
import { CSidebar, CSidebarNav, CNavItem, CContainer, CForm } from '@coreui/react';
import { RiDashboardLine } from 'react-icons/ri';
import { Avatar } from 'primereact/avatar';
import axios from 'axios';
import SepioLogo  from './../image/Sepio_Logo.png';
import MacSearch  from './../image/Mac_Search.png';

export default function Layout() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [macAddresses, setMacAddresses] = useState([]);
    const [filteredMacAddresses, setFilteredMacAddresses] = useState([]);

    useEffect(() => {
        async function fetchMacAddresses() {
            try {
                const response = await axios.get('/api/mac-addresses');
                setMacAddresses(response.data);
                setFilteredMacAddresses([]);
            } catch (error) {
                console.error('Error fetching MAC addresses:', error);
            }
        }
        fetchMacAddresses();
    }, []);

    const handleLogout = () => {
        navigate('/');
    }

    const handleStartClick = () => {
        navigate('/querytool');
      };

    const handlePostMac = async () => {
        try {
            const response = await axios.post('/api/mac-addresses', { macAddress: searchQuery });
            console.log('POST response:', response.data);
            setMacAddresses(response.data);
            setFilteredMacAddresses(response.data);
        } catch (error) {
            console.error('Error posting MAC address:', error);
        }
    }

    const start = (
        <>
            <img alt='logo' src={SepioLogo} height='40' className='mr-2' onClick = {handleStartClick} />
        </>
    );

    const end = (
        <div className='flex align-items-center gap-2'>
            <NavLink to='/' className='p-button p-component p-button-text' style={{ borderRadius: '10px', padding: '10px' }}>
                <span className='pi pi-sign-out' style={{ marginRight: '5px' }} />
                Logout
            </NavLink>
            <Avatar icon='pi pi-user' size='large' shape='circle' />
        </div>
    );

    return (
        <div>
            <Menubar start={start} end={end} />

            <CSidebar className='border-end custom-sidebar'>
                <CSidebarNav>
                    <CContainer fluid>
                        <CForm className='d-flex'>
                            {/*Place for additional form elements after demo*/}
                        </CForm>
                    </CContainer>
                    <CNavItem>
                        <NavLink to='/querytool/mac' className='nav-link'><RiDashboardLine className='nav-icon' /> MAC</NavLink>
                    </CNavItem>
                    <CNavItem>
                        <NavLink to='/querytool/logs' className='nav-link'><RiDashboardLine className='nav-icon' /> Logs</NavLink>
                    </CNavItem>
                    <CNavItem>
                        <NavLink to='/querytool/searchhistory' className='nav-link'><RiDashboardLine className='nav-icon' /> Search History</NavLink>
                    </CNavItem>
                    <CNavItem>

                  <NavLink to = '/querytool/settings' className = 'nav-link'><RiDashboardLine className = 'nav-icon'/> Settings </NavLink>
                  </CNavItem>
                </CSidebarNav>
            </CSidebar>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-600px', top: '4px', marginRight: '-150px' }}>
                <InputText
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search MAC"
                    style={{ width: `${(searchQuery.length < 45 ? 45 : searchQuery.length) * 8 + 20}px`, minWidth: '600px' }} // Adjusting width dynamically
                />
                <Button label = 'Search' icon='pi pi-search' onClick={handlePostMac} style={{ backgroundColor: '#183462', borderColor: '183462', marginLeft: '-10px' }} />
            </div>
				{/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-150px', top: '4px', marginRight: '-150px'}}>
					<img alt = 'logo' src = {MacSearch} height = '40' className = 'mr-2'/>
				</div> */}
            {filteredMacAddresses.length > 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginRight: '-100px', width: '100%' }}>
                    <table className="table table-striped" style = {{ position: 'absolute', top:'55%', left: '30%', width:'50%'}}>
                        <thead>
                            <tr>
                                <th>MAC Address Status</th>
                                <th>MAC locations</th>
                            </tr>
                        </thead>
                        <tbody  >
                            {filteredMacAddresses.map((mac, index) => {
                                if (typeof mac === 'string') { 
                                    if (mac.indexOf("No record") >= 0) {
                                        return (
                                        <tr key={index}>
                                            <td>{mac}</td>
                                            <td></td>
                                        </tr>
                                    );
                                    }else {
                                        return (
                                        <tr key={index}>
                                            <td>{mac}</td>
                                            <td>
                                                <div>
                                                    {filteredMacAddresses[index + 1].slice(1).map((item, subIndex) => (
                                                        <div key={subIndex}>{item}</div>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                }} 
                            })}
                        </tbody>
                    </table>
                </div>
            )}
                        <div style = {{marginTop: '-120px', marginRight: '-200px'}}>
<h1>
  MAC Search:
</h1>
</div>
		 </div>
		 
		 
    );
}




