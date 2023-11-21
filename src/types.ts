export interface Applicant {
    id: string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    email: string;
    isPrimary: boolean;
  }

  export interface NameCount {
    [key: string]: number;
  }