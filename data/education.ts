export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  detail: string;
  period: string;
}

const education: EducationItem[] = [
  {
    institution: "Guru Ghasidas Vishwavidyalaya (Central University)",
    location: "Bilaspur, Chhattisgarh",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    detail: "CGPA: 8.65 / 10.0",
    period: "Nov 2022 – June 2026",
  },
  {
    institution: "Alipore Takshal Vidyapith",
    location: "Kolkata, West Bengal",
    degree: "Higher Secondary Education (Class 12)",
    detail: "Percentage: 74%",
    period: "June 2019 – March 2021",
  },
  {
    institution: "Alipore Takshal Vidyapith",
    location: "Kolkata, West Bengal",
    degree: "Secondary Education (Class 10)",
    detail: "Percentage: 72%",
    period: "June 2017 – March 2019",
  }
];

export default education;
