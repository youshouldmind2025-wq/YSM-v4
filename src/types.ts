export interface PartnerCompany {
  id: string;
  name: string;
  category: string;
  url: string;
  description: string;
}

export interface ConsultantBio {
  name: string;
  title: string;
  agencyRole: string;
  photo?: string;
  specializations: string[];
  roles: string[];
  education: string[];
  passions: string[];
  phone: string;
  website: string;
  email: string;
  linkedin: string;
  quote: string;
  quoteAuthor: string;
}
