type Technology = {
  id: string;
  name: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  time_period: string;
  tech_stack: Technology[];
  image_url: string;
  project_url?: string;
  repo_url?: string;
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
  id: string;
  text: string;
};

export type Experience = {
  id: string;
  title: string;
  employment_type: EmploymentType;
  time_period: string;
  company: string;
  location: string;
  location_type: LocationType;
  description: Description[];
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  major: string;
  time_period: string;
  description: Description[];
};
