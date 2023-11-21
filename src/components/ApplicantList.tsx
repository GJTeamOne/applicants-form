import React from 'react';
import { Applicant } from '../types';

// Define props for ApplicantList component
const ApplicantList: React.FC<{ applicants: Applicant[] }> = ({ applicants }) => {
  const sortedApplicants = applicants.slice().sort((a, b) => (a.isPrimary === b.isPrimary) ? 0 : a.isPrimary ? -1 : 1);
  // Sort applicants to display primary applicants first
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Submitted Applicants</h2>
      <ul className="list-disc pl-5">
        {sortedApplicants.map(applicant => (
          <li key={applicant.id} className={`my-2 p-2 ${applicant.isPrimary ? 'bg-blue-100' : 'bg-gray-100'} rounded`}>
            {applicant.firstName} {applicant.lastName} <span className="text-sm font-semibold">{applicant.isPrimary ? '(Primary)' : ''}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicantList;
