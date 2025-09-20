import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Code, Palette, Database, GitBranch, MapPin, Calendar, Sparkles, Heart } from "lucide-react";

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
      description: "Full-stack educational platform with interactive lessons, mock tests, and performance analytics. Features role-based authentication and Highcharts integration for progress visualization.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "S&S E-commerce Platform", 
      tech: "ReactJS, NodeJS, Prisma",
      description: "B2B e-commerce platform enabling real-time quote comparison from multiple suppliers with role-based functionality for buyers and suppliers.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Expiwell Research Platform",
      tech: "ReactJS, jQuery, NodeJS, MongoDB", 
      description: "Real-time data collection platform for researchers using EMA and ESM methods. Integrated with Fitbit and Apple Watch for passive health data collection.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Dalai Cannabis Landing Page",
      tech: "ReactJS, ThreeJS",
      description: "Immersive landing page featuring 3D models and animations using Three.js for enhanced user experience and visual appeal.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Animated Hero Header */}
      <header className="relative overflow-hidden bg-gradient-primary border-b">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6 animate-glow">
                <Code className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">Nandani Gajjar</h1>
              <div className="flex items-center justify-center gap-2 text-2xl text-white/90 mb-8">
                <Sparkles className="w-6 h-6 animate-bounce-subtle" />
                <span>Freelance Software Developer</span>
                <Sparkles className="w-6 h-6 animate-bounce-subtle" />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Phone className="w-4 h-4" />
                <span>8320908112</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Mail className="w-4 h-4" />
                <span>nandani6501@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/nandani-gajjar/" className="hover:text-white transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* About Section with animated elements */}
        <section className="animate-slide-up">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-white to-purple-50/50">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl bg-gradient-primary bg-clip-text text-transparent flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 text-pink-500" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                Passionate freelance software developer with <span className="font-bold text-primary">2+ years</span> of experience crafting 
                scalable and high-performing web applications. I specialize in full-stack development using modern JavaScript 
                technologies, solving complex problems, and optimizing application performance. Always eager to learn emerging 
                technologies and deliver impactful digital solutions that make a difference.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Colorful Skills Section */}
        <section className="animate-slide-up">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardHeader className="bg-gradient-primary text-white text-center">
              <CardTitle className="text-3xl flex items-center justify-center gap-2">
                <Palette className="w-6 h-6" />
                Technical Arsenal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 bg-white space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-5 h-5 text-purple-600" />
                    <h3 className="font-bold text-lg text-foreground">Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} className="bg-skill-bg text-skill-text hover:scale-105 transition-transform px-4 py-2 text-sm font-medium">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <GitBranch className="w-5 h-5 text-green-600" />
                    <h3 className="font-bold text-lg text-foreground">Frameworks</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skills.frameworks.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-green-200 text-green-700 hover:bg-green-50 hover:scale-105 transition-all px-4 py-2 text-sm font-medium">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Database className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-lg text-foreground">Databases</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skills.databases.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:scale-105 transition-all px-4 py-2 text-sm font-medium">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <GitBranch className="w-5 h-5 text-orange-600" />
                    <h3 className="font-bold text-lg text-foreground">Tools</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skills.tools.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50 hover:scale-105 transition-all px-4 py-2 text-sm font-medium">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section - Company removed */}
        <section className="animate-slide-up">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl bg-gradient-primary bg-clip-text text-transparent">Professional Journey</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-primary rounded-full"></div>
                <div className="relative pl-16">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                    <div className="absolute -left-12 top-6 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Software Developer</h3>
                        <p className="text-primary font-medium text-lg">Freelance Development</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-purple-50 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">Jan 2023 - Present</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>Ahmedabad, Gujarat</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Specialized in building and enhancing modern web platforms using the MERN stack. Developed full-stack 
                      features across various projects in agile environments, focusing on scalable architecture and optimal 
                      performance. Experienced in collaborating with teams to deliver high-quality digital solutions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Colorful Projects Grid */}
        <section className="animate-slide-up">
          <Card className="border-0 shadow-2xl overflow-hidden">
            <CardHeader className="bg-gradient-primary text-white text-center">
              <CardTitle className="text-3xl">Featured Projects</CardTitle>
              <p className="text-white/80 mt-2">Showcasing innovation through code</p>
            </CardHeader>
            <CardContent className="p-8 bg-white">
              <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                  <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                    <CardHeader className="relative">
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <CardDescription className="font-semibold text-accent text-base">{project.tech}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section className="animate-slide-up">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-white to-blue-50/50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl bg-gradient-primary bg-clip-text text-transparent">Academic Foundation</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Bachelor of Engineering</h3>
                    <p className="text-lg text-primary font-medium">Computer Engineering</p>
                    <p className="text-accent font-medium">Government Engineering College, Bhavnagar</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm bg-gradient-primary text-white px-3 py-1 rounded-full font-medium">CGPA: 8.85</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-blue-50 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">2019 - 2023</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Enhanced Contact CTA */}
        <section className="text-center animate-slide-up">
          <Card className="border-0 shadow-2xl bg-gradient-primary text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-hero-gradient"></div>
            <CardContent className="pt-12 pb-12 relative">
              <div className="mb-6">
                <Mail className="w-16 h-16 mx-auto mb-4 animate-bounce-subtle" />
                <h2 className="text-4xl font-bold mb-4">Let's Create Something Amazing Together!</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Ready to bring your ideas to life? I'm available for freelance projects and collaborations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all shadow-lg">
                  <a href="mailto:nandani6501@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Get In Touch
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all">
                  <a href="https://www.linkedin.com/in/nandani-gajjar/" className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Stylish Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="w-5 h-5" />
            <span className="font-medium">Made with</span>
            <Heart className="w-4 h-4 text-pink-300 animate-bounce-subtle" />
            <span className="font-medium">by Nandani</span>
          </div>
          <p className="text-white/70">&copy; 2024 Nandani Gajjar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
