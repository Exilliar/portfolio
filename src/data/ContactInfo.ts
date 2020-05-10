import Contact from "@/models/Contact";

const phone: Contact<string> = { type: "Phone", value: "123401725" };
const email: Contact<string> = {
  type: "Email",
  value: "email.email@email.com",
};
const gitHub: Contact<string> = { type: "GitHub", value: "githubURL" };

const contactInfo = [phone, email, gitHub];

export default contactInfo;
