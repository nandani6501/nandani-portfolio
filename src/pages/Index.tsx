import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, Calendar } from "lucide-react";

const Index = () => {
  const skills = {
    languages: ["TypeScript", "JavaScript", "CSS", "HTML"],
    frameworks: ["Node.js", "NestJS", "ExpressJS", "ReactJS", "ThreeJS", "jQuery"],
    databases: ["MySQL", "ORMs (Sequelize, TypeORM, Prisma)", "MongoDB"],
    tools: ["Git", "Docker"]
  };

  const projects = [
    {
      title: "BrainDoc Academy",
      tech: "ReactJS, NodeJS, Sequelize",
      description: "Full-stack educational platform with interactive lessons, mock tests, and performance analytics. Features role-based authentication and Highcharts integration for progress visualization."
    },
    {
      title: "S&S E-commerce Platform",
      tech: "ReactJS, NodeJS, Prisma",
      description: "B2B e-commerce platform enabling real-time quote comparison from multiple suppliers with role-based functionality for buyers and suppliers."
    },
    {
      title: "Expiwell Research Platform",
      tech: "ReactJS, jQuery, NodeJS, MongoDB",
      description: "Real-time data collection platform for researchers using EMA and ESM methods. Integrated with Fitbit and Apple Watch for passive health data collection."
    },
    {
      title: "Dalai Cannabis Landing Page",
      tech: "ReactJS, ThreeJS",
      description: "Immersive landing page featuring 3D models and animations using Three.js for enhanced user experience and visual appeal."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground">Nandani Gajjar</h1>
              <p className="text-xl text-muted-foreground mt-2">Software Developer</p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>8320908112</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>nandani6501@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/nandani-gajjar/" className="hover:text-primary transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Summary Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Skilled software developer with 2+ years of experience in building scalable and high-performing web applications. 
                Proficient in developing both front-end and back-end components using JavaScript libraries. Skilled in solving 
                complex problems and optimizing application performance. Passionate about learning emerging technologies and 
                contributing to dynamic, collaborative teams to deliver impactful digital solutions.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Technical Skills */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Database Management</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-foreground">Tools & Version Control</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Work Experience */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Jr. Software Developer</h3>
                      <p className="text-primary font-medium">eSparkBiz Technologies Pvt Ltd</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Jan 2023 - Present</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>Ahmedabad, Gujarat</span>
                  </div>
                  <p className="text-muted-foreground mt-3 leading-relaxed">
                    Started my professional journey at EsparkBiz as a Software Engineer in January 2023. Involved in building 
                    and enhancing several modern web platforms using MERN stack. Hands-on experience in building full-stack 
                    features for a variety of projects in an Agile environment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Featured Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                  <Card key={index} className="border">
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="font-medium text-primary">{project.tech}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Bachelor of Engineering (Computer Engineering)</h3>
                      <p className="text-primary font-medium">Government Engineering College, Bhavnagar</p>
                      <p className="text-sm text-muted-foreground mt-1">CGPA: 8.85</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>2019 - 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Let's Work Together</h2>
              <p className="text-muted-foreground mb-6">
                Interested in collaborating? Feel free to reach out for opportunities or just to connect!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href="mailto:nandani6501@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/nandani-gajjar/" className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>&copy; 2024 Nandani Gajjar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
