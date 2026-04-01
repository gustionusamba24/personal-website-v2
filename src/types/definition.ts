type Technology = {
  id: number;
  name: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  time_period: string;
  tech_stack: Technology[];
  image_url: string;
  project_url: string | null;
  repo_url: string | null;
};

enum EmploymentType {
  FULL_TIME = 'Full-time',
  PART_TIME = 'Part-time',
  SELF_EMPLOYED = 'Self-employed',
  CONTRACT = 'Contract',
  FREELANCE = 'Freelance',
  INTERNSHIP = 'Internship',
  APPRENTICESHIP = 'Apprenticeship',
}

type LocationType = 'Remote' | 'On-site' | 'Hybrid';

type Description = {
  id: number;
  text: string;
};

export type Experience = {
  id: number;
  title: string;
  employment_type: EmploymentType;
  time_period: string;
  company: string;
  location: string;
  location_type: LocationType;
  description: Description[];
};

export type Education = {
  id: number;
  school: string;
  degree: string;
  major: string;
  time_period: string;
  description: Description[];
};
