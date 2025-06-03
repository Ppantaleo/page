import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Database,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  DogIcon as Mastodon,
  Bike,
  BookMarked,
  Footprints,
  Globe,
  Heart,
  PenTool,
  Sparkles,
  Swords,
  XIcon as Yin,
  ExternalLink,
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-10 grid-rows-10">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="border border-slate-400 dark:border-slate-600"
                style={{
                  opacity: Math.random() * 0.5 + 0.1,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-12">
              <Image
                src="/images/logo.png"
                alt="Patricio Pantaleo Logo"
                width={300}
                height={150}
                className="h-auto w-64 md:w-80"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-serif mb-4 text-slate-800 dark:text-white">Patricio Pantaleo</h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mb-8 tracking-wide">
              Digital Humanities Expert & Academic Publishing Specialist
            </p>

            <div className="flex space-x-4 mb-12">
              <Link
                href="https://www.linkedin.com/in/patricio-pantaleo"
                target="_blank"
                className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Linkedin className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </Link>
              <Link
                href="mailto:patricio@pantaleo.ar"
                className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Mail className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </Link>
              <Link
                href="https://github.com/Ppantaleo"
                target="_blank"
                className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </Link>
              <Link
                href="https://mastodon.social/@patopantaleo"
                target="_blank"
                className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <Mastodon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </Link>
            </div>

            <a 
                href="#about" 
                className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:gap-4 transition-all tracking-wider text-sm cursor-pointer"
              >
                EXPLORE MY WORK
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <ArrowRight className="w-6 h-6 text-slate-400 dark:text-slate-500 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-slate-800 dark:text-white">Biography</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  I was trained in the humanities. That marks my vision of the world. Later, I created companies, supported academic publishers in different parts of Latin America and Spain and became passionate about free software and metadata for the sector.
                </p>
                <p>
                  I am a professor and graduate in History, with a master's degree in Philosophy, Religion and Contemporary Culture. I was born in the province of Cordoba, Argentina, and recently completed a diploma in Management of Online Scientific Journals by the University of Business and Social Sciences (UCES) of Argentina (2022) and received the title of expert in Research Support Services by the University Pablo de Olavide, Spain (2024).
                </p>
                <p>
                  Currently, I am Director of Paideia Studio, sponsor of Crossref, where I bring my expertise in metadata management and persistent identifiers for academic content.
                </p>
              </div>

              <div className="mt-8 flex items-center text-slate-500 dark:text-slate-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Córdoba, Argentina</span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="Patricio Pantaleo Logo"
                      width={200}
                      height={100}
                      className="opacity-20"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                  <div className="text-white">
                    <div className="text-sm uppercase tracking-wider mb-1">Director</div>
                    <div className="text-xl font-medium">Paideia Studio</div>
                  </div>
                </div>
              </div>

              {/* Academic Profile Links Box */}
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg mt-6 mx-auto md:absolute md:-bottom-6 md:-right-6 md:mt-0">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">ORCID</div>
                      <a 
                        href="https://orcid.org/0000-0002-8104-8975" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-medium text-slate-800 dark:text-white hover:underline"
                      >
                        0000-0002-8104-8975
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href="https://openalex.org/works?page=1&filter=authorships.author.id%3Aa5020431776"
                      target="_blank"
                      className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors"
                    >
                      OpenAlex <ExternalLink className="w-3 h-3" />
                    </Link>
                    <Link
                      href="https://www.scilit.com/scholars/17835750"
                      target="_blank"
                      className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors"
                    >
                      Scilit <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-background dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif mb-12 text-center text-slate-800 dark:text-white">Expertise & Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Academic Publishing"
              description="Expert in open access strategies and academic journal management with extensive experience supporting publishers across Latin America and Spain."
            />

            <SkillCard
              icon={<Database className="w-8 h-8" />}
              title="Metadata Management"
              description="Specialized in metadata for academic content and persistent identifiers, working as a Crossref sponsor through Paideia Studio."
            />

            <SkillCard
              icon={<FileText className="w-8 h-8" />}
              title="Digital Humanities"
              description="Bridging traditional humanities with digital technologies to enhance research dissemination and accessibility."
            />

            <SkillCard
              icon={<Globe className="w-8 h-8" />}
              title="Research Support"
              description="Providing specialized services to researchers and academic institutions, enhancing scholarly communication and knowledge dissemination."
            />
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-serif mb-6 text-center text-slate-700 dark:text-slate-200">Technical Skills</h3>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Open Access",
                "Open Journal Systems (OJS)",
                "Digital Humanities",
                "Academic Publishing",
                "Metadata Management",
                "Preprints",
                "Crossref",
                "Quarto",
                "RMarkdown",
                "Linux Server Administration",
                "XML-JATS",
                "CSS",
                "HTML",
                "AWS",
                "Pandoc",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-slate-700 rounded-full text-sm text-slate-700 dark:text-slate-200 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif mb-12 text-center text-slate-800 dark:text-white">Notable Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="LatArXiv"
              description="Developed the preprint server LatArXiv, enhancing the accessibility of academic research across Latin America."
              tags={["Preprints", "Open Access", "Research"]}
            />

            <ProjectCard
              title="Paideia Studio"
              description="Director of Paideia Studio, a Crossref sponsor providing expert guidance in open access strategies and metadata management."
              tags={["Crossref", "Metadata", "Academic Publishing"]}
            />

            <ProjectCard
              title="OJS Implementation"
              description="Implemented Open Journal Systems (OJS) for numerous academic journals and publishers throughout Latin America and Spain."
              tags={["OJS", "Journal Management", "Publishing"]}
            />

            <ProjectCard
              title="Academic Journal"
              description="Founded and directed an academic journal in 2015, using OJS 2 on the PPCT portal of Caicyt."
              tags={["Journal", "OJS", "Editorial"]}
            />
          </div>
        </div>
      </section>

      {/* Personal Interests Section - Moved below Projects */}
      <section id="interests" className="py-24 bg-background dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif mb-12 text-center text-slate-800 dark:text-white">
            Other Interests & Hobbies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-5xl mx-auto">
            <InterestCard icon={<Swords className="w-6 h-6" />} title="Aikido" />
            <InterestCard icon={<Yin className="w-6 h-6" />} title="Tai Chi" />
            <InterestCard icon={<Globe className="w-6 h-6" />} title="Traveling" />
            <InterestCard icon={<PenTool className="w-6 h-6" />} title="Writing" />
            <InterestCard icon={<Heart className="w-6 h-6" />} title="Family" />
            <InterestCard icon={<Bike className="w-6 h-6" />} title="Cycling" />
            <InterestCard icon={<Sparkles className="w-6 h-6" />} title="Meditation" />
            <InterestCard icon={<BookMarked className="w-6 h-6" />} title="Religions" />
            <InterestCard icon={<Footprints className="w-6 h-6" />} title="Philosophy" />
            <InterestCard icon={<Globe className="w-6 h-6" />} title="Basquet" />
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-slate-600 dark:text-slate-300">
               Beyond my professional endeavors, I strive for balance in life through these activities. They inform my
              worldview and enrich my understanding of humanity, complementing my academic work in meaningful ways.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated for GitHub Pages */}
      <section id="contact" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-6 text-slate-800 dark:text-white">Get in Touch</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Interested in collaborating or have questions about academic publishing, metadata management, or digital
              humanities? Reach out through any of these channels:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <Link
                href="mailto:patricio@paideiastudio.net"
                className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-slate-700 dark:text-white"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Email</div>
                  <div className="font-medium">patricio@paideiastudio.net</div>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com/in/patricio-pantaleo"
                target="_blank"
                className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-slate-700 dark:text-white"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</div>
                  <div className="font-medium">Patricio Pantaleo</div>
                </div>
              </Link>

              <Link
                href="https://mastodon.social/@patopantaleo"
                target="_blank"
                className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-slate-700 dark:text-white"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mastodon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Mastodon</div>
                  <div className="font-medium">@patopantaleo</div>
                </div>
              </Link>

              <Link
                href="https://github.com/Ppantaleo"
                target="_blank"
                className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-slate-700 dark:text-white"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Github className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-slate-500 dark:text-slate-400">GitHub</div>
                  <div className="font-medium">Ppantaleo</div>
                </div>
              </Link>
            </div>

            {/* Intentionally left empty - form section removed */}
          </div>
        </div>
      </section>

      {/* Footer */}
     <footer className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Patricio Pantaleo Logo"
                  width={100}
                  height={50}
                  className="h-10 w-auto mr-3"
                />
              </div>
              <p className="mt-2 text-slate-400">Digital Humanities & Academic Publishing</p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://www.linkedin.com/in/patricio-pantaleo"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:patricio@pantaleo.ar"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/Ppantaleo"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://mastodon.social/@patopantaleo"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mastodon className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <div className="mb-2">
              © {new Date().getFullYear()} Patricio Pantaleo
              <span className="mx-1">·</span>
              <a 
                href="https://github.com/Ppantaleo/page/blob/main/LICENSE" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                GPL-3.0 License
              </a>
            </div>
            <div>
              <a 
                href="https://github.com/Ppantaleo/page" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors flex items-center justify-center gap-1"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif mb-3 text-slate-800 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  )
}

function ProjectCard({ title, description, tags }) {
  return (
    <div className="bg-background dark:bg-slate-800 p-6 rounded-xl hover:shadow-md transition-all border border-slate-200 dark:border-slate-700">
      <h3 className="text-xl font-serif mb-3 text-slate-800 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function InterestCard({ icon, title }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl flex flex-col items-center text-center hover:shadow-md transition-all border border-slate-200 dark:border-slate-700">
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
        {icon}
      </div>
      <h3 className="font-medium text-slate-800 dark:text-white">{title}</h3>
    </div>
  )
}

