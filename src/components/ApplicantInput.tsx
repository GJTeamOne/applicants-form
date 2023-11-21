import React from 'react';
import { Applicant } from '../types';

// Define props for ApplicantInput component
interface ApplicantInputProps {
  applicant: Applicant;
  updateApplicant: (id: string, field: keyof Applicant, value: string) => void;
  removeApplicant: (id: string) => void;
  setPrimaryApplicant: (id: string) => void;
}

const ApplicantInput: React.FC<ApplicantInputProps> = ({
  applicant, updateApplicant, removeApplicant, setPrimaryApplicant
}) => {

  // Handle changes to first name and last name inputs
  const handleNameChange = (field: keyof Applicant, value: string) => {
    const capitalized = value.charAt(0).toUpperCase() + value.slice(1);
    updateApplicant(applicant.id, field, capitalized);
  };
  
  // Handle changes to mobile number input (allow only numbers)
  const handleMobileNumberChange = (value: string) => {
    const numbersOnly = value.replace(/[^0-9]/g, '');
    updateApplicant(applicant.id, 'mobileNumber', numbersOnly);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={applicant.firstName}
          onChange={(e) => handleNameChange('firstName', e.target.value)}
          placeholder="First Name"
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={applicant.lastName}
          onChange={(e) => handleNameChange('lastName', e.target.value)}
          placeholder="Last Name"
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          value={applicant.mobileNumber}
          onChange={(e) => handleMobileNumberChange(e.target.value)}
          placeholder="Mobile Number"
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          value={applicant.email}
          onChange={(e) => updateApplicant(applicant.id, 'email', e.target.value)}
          placeholder="Email"
          required
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={applicant.isPrimary}
            onChange={() => setPrimaryApplicant(applicant.id)}
            className="form-checkbox rounded text-blue-500 focus:ring-blue-500"
          />
          <span className="ml-2 text-gray-700">Primary Applicant</span>
        </label>
        <button onClick={() => removeApplicant(applicant.id)} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ApplicantInput;
