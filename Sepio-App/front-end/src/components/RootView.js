// import React, { useState } from 'react';
// import axios from 'axios';

// const EmployeeForm = ({ onEmployeeAdded }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     skills: '',
//     education: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/employees', formData);
//       onEmployeeAdded(response.data); // Call the function with new employee data
//     } catch (error) {
//       console.error('Error adding employee:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Skills:
//           <input
//             type="text"
//             name="skills"
//             value={formData.skills}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Education:
//           <input
//             type="text"
//             name="education"
//             value={formData.education}
//             onChange={handleChange}
//             required
//           />
//         </label>
//       </div>
//       <button type="submit">Add Employee</button>
//     </form>
//   );
// };

// export default EmployeeForm;
































import React, { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css'; // Import theme
import 'primereact/resources/primereact.min.css'; // Import PrimeReact CSS
import 'primeicons/primeicons.css'; // Import PrimeIcons
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { RadioButton } from "primereact/radiobutton";
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';


const EmployeeForm = () => {
  const [type, setType] = useState(null);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [rate, setRate] = useState('');
  const [projectAccess, setProjectAccess] = useState('');
  const [goals, setGoals] = useState('');
  const [jiraIntegration, setJiraIntegration] = useState('');
  const [roles, setRoles] = useState('');

  const types = [
    { label: 'Employee', value: 'Employee' },
    { label: 'Contractor', value: 'Contractor' }
  ];




  const startContent = (
    <React.Fragment>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">

       {/* <img src = {'//x_llll2_insearch_f.inCloudLogicLogo.png'}> </img> */}

        </svg>
    </React.Fragment>
);

const centerContent = (
    <div className="flex flex-wrap align-items-center gap-3">
        <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
            <i className="pi pi-home text-2xl"></i>
        </button>
        <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
            <i className="pi pi-user text-2xl"></i>
        </button>
        <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
            <i className="pi pi-search text-2xl"></i>
        </button>
    </div>
);

const endContent = (
    <React.Fragment>
        <div className="flex align-items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold text-bluegray-50">Amy Elsner</span>
        </div>
    </React.Fragment>
);

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '400px',
          backgroundColor: '#007bff',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          paddingTop: '1rem',
          boxSizing: 'border-box',
        }}
      >
        <img
          src="https://via.placeholder.com/100" // Placeholder for avatar image
          alt="Avatar"
          style={{ borderRadius: '50%', marginBottom: '1rem' }}
        />
        <h3>Denis</h3>
        <ul style={{ listStyleType: 'none', padding: 0, width: '100%' }}>
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
              <i className="pi pi-sign-out" style={{ marginRight: '0.5rem' }}></i> Logout
            </button>
          </li>
        </ul>
      </div>

      
      <div style={{ flex: 1, padding: '1rem' }}>
      <Toolbar start={startContent} center={centerContent} end={endContent} className="bg-gray-900 shadow-2" style={{ borderRadius: '3rem', backgroundImage: 'linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))' }} />
         <div className="p-fluid" style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ flex: 1, marginRight: '1rem' }}>
            <div className="p-field">
              <label htmlFor="skills">Skills</label>
              <InputText id="skills" value={skills} onChange={(e) => setSkills(e.target.value)} />
            </div>
            <div className="p-field">
              <label htmlFor="education">Education</label>
              <InputText id="education" value={education} onChange={(e) => setEducation(e.target.value)} />
            </div>
          </div>
          <div style={{ flex: 1, marginLeft: '1rem' }}>
            <div className="p-field">
              <label htmlFor="rate">Rate</label>
              <InputText id="rate" value={rate} onChange={(e) => setRate(e.target.value)} />
            </div>
            <div className="p-field">
              <label htmlFor="type">Type</label>
              <Dropdown id="type" value={type} options={types} onChange={(e) => setType(e.value)} placeholder="Select Type" />
            </div>
          </div>
        </div>
        <div className="p-field" style = {{ marginTop: '50px'}}>
          <label htmlFor="workExperience">Work Experience</label>
          <InputTextarea id="workExperience" style = {{width: '100%'}} rows={3} value={workExperience} onChange={(e) => setWorkExperience(e.target.value)} />
        </div>
        <div className="p-field" style = {{ marginTop: '50px'}}>
          <label htmlFor="projectAccess" >Project Access</label>
          <InputText id="projectAccess" style = {{width: '100%'}} value={projectAccess} onChange={(e) => setProjectAccess(e.target.value)} />
        </div>
  
        <div className="p-field" style = {{ marginTop: '50px'}}>
          <Button label="Generate CV (PDF)" icon="pi pi-file-pdf" />
          <Button label="Generate CV (DOCX)" icon="pi pi-file-word" className="p-button-secondary" style={{ marginLeft: '1rem' }} />
        </div>
      </div>
    </div>
    
  );
};

export default EmployeeForm;


