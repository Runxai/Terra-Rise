
export type Language = 'en' | 'uk' | 'ru';

export interface TranslationStrings {
  nav: {
    about: string;
    services: string;
    calculator: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  logos: {
    title: string;
    desc: string;
  };
  comparison: {
    title: string;
    oldHome: string;
    newHome: string;
    investmentGrowth: string;
  };
  calculator: {
    title: string;
    area: string;
    quality: string;
    estimatedCost: string;
    standard: string;
    premium: string;
    luxury: string;
  };
  steps: {
    title: string;
    step1: { title: string; desc: string };
    step2: { title: string; desc: string };
    step3: { title: string; desc: string };
    step4: { title: string; desc: string };
    step5: { title: string; desc: string };
  };
  finance: {
    title: string;
    loanInfo: string;
    creditInfo: string;
    badCredit: string;
  };
  location: {
    title: string;
    chicago: string;
    illinois: string;
  };
}
