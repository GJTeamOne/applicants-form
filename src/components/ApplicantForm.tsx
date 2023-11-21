import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ApplicantInput from "./ApplicantInput";
import ApplicantList from "./ApplicantList";
import { Applicant, NameCount } from "../types";

const ApplicantForm: React.FC = () => {
// State for managing applicants
  const [applicants, setApplicants] = useState<Applicant[]>([
    {
      id: uuidv4(),
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      isPrimary: true,
    },
  ]);
  // State for tracking submitted applicants
  const [submittedApplicants, setSubmittedApplicants] = useState<Applicant[]>(
    []
  );

  // useEffect to update submitted applicants when applicants change
  useEffect(() => {
    setSubmittedApplicants(
      applicants.filter((applicant) =>
        submittedApplicants.some((sa) => sa.id === applicant.id)
      )
    );
  }, [applicants]);

  // Function to add a new applicant
  const addApplicant = () => {
    setApplicants([
      ...applicants,
      {
        id: uuidv4(),
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        isPrimary: false,
      },
    ]);
  };

  // Function to remove an applicant
  const removeApplicant = (id: string) => {
    const isPrimaryRemoved = applicants.find((applicant) => applicant.id === id)
      ?.isPrimary;
    const updatedApplicants = applicants.filter(
      (applicant) => applicant.id !== id
    );

    if (updatedApplicants.length > 0 && isPrimaryRemoved) {
      updatedApplicants[0].isPrimary = true;
    }

    setApplicants(updatedApplicants);
  };

  // Function to set a primary applicant
  const setPrimaryApplicant = (id: string) => {
    setApplicants(
      applicants.map((applicant) => ({
        ...applicant,
        isPrimary: applicant.id === id,
      }))
    );
  };

  // Function to update an applicant's field
  const updateApplicant = (
    id: string,
    field: keyof Applicant,
    value: string
  ) => {
    const updatedApplicants = applicants.map((applicant) =>
      applicant.id === id ? { ...applicant, [field]: value } : applicant
    );

    // Check for duplicates in mobile number
    if (field === "mobileNumber") {
      const mobileNumberCounts = updatedApplicants.reduce(
        (acc: NameCount, applicant) => {
          const mobileNumber = applicant.mobileNumber;
          acc[mobileNumber] = (acc[mobileNumber] || 0) + 1;
          return acc;
        },
        {}
      );

      if (Object.values(mobileNumberCounts).some((count) => count > 1)) {
        alert("An applicant with the same mobile number already exists.");
        return;
      }
    }

    // Check for duplicates in email
    if (field === "email") {
      const emailCounts = updatedApplicants.reduce(
        (acc: NameCount, applicant) => {
          const email = applicant.email.toLowerCase();
          acc[email] = (acc[email] || 0) + 1;
          return acc;
        },
        {}
      );

      if (Object.values(emailCounts).some((count) => count > 1)) {
        alert("An applicant with the same email already exists.");
        return;
      }
    }

    // Check for duplicates in first and last name
    const nameCounts = updatedApplicants.reduce(
      (acc: NameCount, { firstName, lastName }) => {
        const name = `${firstName} ${lastName}`.trim();
        acc[name] = (acc[name] || 0) + 1;
        return acc;
      },
      {}
    );

    const isDuplicate = Object.values(nameCounts).some((count) => count > 1);

    if (isDuplicate) {
      alert("An applicant with the same first and last name already exists.");
      return;
    }

    setApplicants(updatedApplicants);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedApplicants(applicants);
  };

  return (
    <div className="flex justify-between gap-10 p-5">
      <div className="flex-1 bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {applicants.map((applicant) => (
            <ApplicantInput
              key={applicant.id}
              applicant={applicant}
              updateApplicant={updateApplicant}
              removeApplicant={removeApplicant}
              setPrimaryApplicant={setPrimaryApplicant}
            />
          ))}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={addApplicant}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Add Applicant
            </button>
            <input
              type="submit"
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 cursor-pointer"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <div className="flex-1 bg-white rounded-lg shadow-md p-6">
        <ApplicantList applicants={submittedApplicants} />
      </div>
    </div>
  );
};

export default ApplicantForm;
