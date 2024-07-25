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
        <h1>Employee Form</h1>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="photo">Photo</label>
            <FileUpload name="photo" accept="image/*" mode="basic" auto />
          </div>
          <div className="p-field">
            <label htmlFor="skills" style = {{maxWidth: '300px',marginLeft: '10px', display: 'flex'}}>Skills</label>
	
            <InputText id="skills" value={skills} style = {{maxWidth: '300px',marginLeft: '10px', display: 'flex' }} onChange={(e) => setSkills(e.target.value)} />
          </div>
          <div className="p-field">
            <label htmlFor="education">Education</label>
            <InputText id="education" value={education} onChange={(e) => setEducation(e.target.value)} />
          </div>
          <div className="p-field">
            <label htmlFor="workExperience">Work Experience</label>
            <InputTextarea id="workExperience" rows={3} value={workExperience} onChange={(e) => setWorkExperience(e.target.value)} />
          </div>
          <div className="p-field">
            <label htmlFor="rate">Rate</label>
            <InputText id="rate" value={rate} onChange={(e) => setRate(e.target.value)} />
          </div>
          <div className="p-field">
            <label htmlFor="type">Type</label>
            <Dropdown id="type" value={type} options={types} onChange={(e) => setType(e.value)} placeholder="Select Type" />
          </div>
          <div className="p-field">
            <label htmlFor="projectAccess">Project Access</label>
            <InputText id="projectAccess" value={projectAccess} onChange={(e) => setProjectAccess(e.target.value)} />
          </div>
          <div className="p-field">
            <label htmlFor="goals">Personal and Non-personal Goals</label>
            <InputTextarea id="goals" rows={3} value={goals} onChange={(e) => setGoals(e.target.value)} />
          </div>
          <div className="p-field">
            <label htmlFor="jiraIntegration">Integration with Jira</label>
            <InputText id="jiraIntegration" value={jiraIntegration} onChange={(e) => setJiraIntegration(e.target.value)} />
          </div>
          <div className="p-field">
            <label htmlFor="roles">Roles</label>
            <InputText id="roles" value={roles} onChange={(e) => setRoles(e.target.value)} />
          </div>
          <div className="p-field">
            <Button label="Generate CV (PDF)" icon="pi pi-file-pdf" />
            <Button label="Generate CV (DOCX)" icon="pi pi-file-word" className="p-button-secondary" style={{ marginLeft: '1rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;

