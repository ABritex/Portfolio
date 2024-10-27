import HomeIntroduction from "./../components/content/Home";
import {
  SoftwareEngineerExperience,
  OtherExperience,
} from "./../components/content/Experience";
import {
  AIVtuberProject,
  OtherProject,
} from "./../components/content/Projects";
import {
  JavaScriptDescription,
  CSSDescription,
  OtherSkillDescription,
} from "./../components/content/SkillTools";

export const contentComponents = {
  Home: [
    {
      name: "Hello! I'm Nicholas John C. Abeleda",
      description: <HomeIntroduction />,
    },
  ],
  Experience: [
    {
      name: "Software Engineer",
      description: <SoftwareEngineerExperience />,
    },
    { name: "Other Experience", description: <OtherExperience /> },
    { name: "Other Experience", description: <OtherExperience /> },
    { name: "Other Experience", description: <OtherExperience /> },
    { name: "Other Experience", description: <OtherExperience /> },
    { name: "Other Experience", description: <OtherExperience /> },
    { name: "Other Experience", description: <OtherExperience /> },
    { name: "Other Experience", description: <OtherExperience /> },
    { name: "Other Experience", description: <OtherExperience /> },
  ],
  Projects: [
    { name: "AI Vtuber", description: <AIVtuberProject /> },
    { name: "Other Project", description: <OtherProject /> },
    { name: "Other Project", description: <OtherProject /> },
    { name: "Other Project", description: <OtherProject /> },
    { name: "Other Project", description: <OtherProject /> },
    { name: "Other Project", description: <OtherProject /> },
    { name: "Other Project", description: <OtherProject /> },
    { name: "Other Project", description: <OtherProject /> },
  ],
  "Skills - Tools": [
    { name: "JavaScript", description: <JavaScriptDescription /> },
    { name: "CSS", description: <CSSDescription /> },
    { name: "CSS", description: <CSSDescription /> },
    { name: "CSS", description: <CSSDescription /> },
    { name: "CSS", description: <CSSDescription /> },
    { name: "CSS", description: <CSSDescription /> },
    { name: "CSS", description: <CSSDescription /> },
    { name: "CSS", description: <CSSDescription /> },
    { name: "CSS", description: <CSSDescription /> },
    { name: "CSS", description: <CSSDescription /> },
    { name: "Other Skills", description: <OtherSkillDescription /> },
  ],
};
