import resumeData from "../data/resume.json";

export function getResumeData() {
  return resumeData;
}

export function removeProtocol(url: string) {
  return url.replace(/(^\w+:|^)\/\//, "");
}
