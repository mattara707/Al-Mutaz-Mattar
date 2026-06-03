export type Language = 'en' | 'ar';

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'systems' | 'network' | 'cctv' | 'servers';
  descEn: string;
  descAr: string;
  priceSAR: number;
  unitEn: string;
  unitAr: string;
  pricingType: 'fixed' | 'per_point' | 'per_camera' | 'starting';
  detailsEn: string[];
  detailsAr: string[];
}

export interface ExperienceItem {
  period: string;
  periodAr: string;
  roleEn: string;
  roleAr: string;
  companyEn: string;
  companyAr: string;
  locationEn: string;
  locationAr: string;
  detailsEn: string[];
  detailsAr: string[];
}

export interface SkillGroup {
  categoryEn: string;
  categoryAr: string;
  skillsEn: string[];
  skillsAr: string[];
}

export interface AchievementItem {
  textEn: string;
  textAr: string;
}
