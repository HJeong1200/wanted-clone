import Company from "./Company";

interface Job {
  title: string;
  company: Company;
  location: string;
  prize: {
    referrer: number;
    applicant: number;
  };
  classification: string;
  task: string;
  experience: number;
  stack: string[];
  content: string;
  endDate: string;
  workLocation: string;
}

export default Job;
