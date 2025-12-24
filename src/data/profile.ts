export const profile = {
  name: "Truong Xuan Nhat",
  role: "Penetration Tester",
  location: "Ho Chi Minh City, Viet Nam",
  intro: "Passionate about web penetration testing, red team operations, and wireless/IoT security labs.",
  email: "txnhat2222@gmail.com",
  github: "https://github.com/ASEN-K5",
  linkedin: "", // Add your LinkedIn URL here
  cvPath: "/assets/CV.pdf",

  about: {
    shortTerm: "Enhance penetration testing skills, deepen offensive security techniques & methodologies.",
    longTerm: "Become a skilled Red Team operator conducting advanced adversary simulations & comprehensive security assessments."
  },

  education: [
    {
      institution: "Ho Chi Minh City University of Technology and Education (HCMUTE)",
      period: "2023 – Present",
      degree: "B.Eng. in Information Security (3rd-year)",
      coursework: ["Computer Networks", "Network Attacks", "Wireless Network Security", "Operating Systems", "Web Security"]
    },
    {
      institution: "CyberJutsu Academy",
      period: "2025 – Present",
      degree: "Web Penetration Testing"
    }
  ],

  skills: {
    "Penetration Testing & Offensive Security": [
      "End-to-end process: recon → threat modeling → scanning → exploitation → post-exploitation → reporting",
      "Web vulns: SQLi, XSS, CSRF, IDOR, SSRF, XXE, SSTI, command injection, insecure file upload, path traversal, JWT attacks, PHP/Java deserialization",
      "Binary exploitation: stack/heap overflow, format-string, integer overflow",
      "Post-exploitation: reverse shells/C2 (Metasploit + manual), privilege escalation & lateral movement"
    ],
    "Networking & Infrastructure": [
      "TCP/IP, OSI model, switching/routing",
      "VLAN, NAT, firewalls, VPN",
      "Network mapping & attack path analysis"
    ],
    "Wireless & Radio Security": [
      "Wi-Fi standards & AP hardening",
      "Wi-Fi/Bluetooth testing with BlueToolkit/Rogue Toolkit",
      "Lab setups with ESP32/Raspberry Pi/routers"
    ],
    "Embedded/IoT": [
      "Arduino/ESP32 development",
      "Sensors/actuators & serial communication",
      "Firmware flashing/modification for routers/modems"
    ],
    "Programming & Tools": [
      "Languages: C/C++, C#, Python, Java, PHP, x86_64 ASM",
      "Platforms: Linux (Kali/Ubuntu), Windows, WSL, Docker",
      "Tools: Burp Suite, Nmap, FFUF, Arjun, SQLMap, IDA, Ghidra, gdb, pwntools"
    ],
    "Languages": [
      "Vietnamese (Native)",
      "English (Intermediate, IELTS 5.5)"
    ]
  },

  projects: [
    {
      title: "GSM-based Industrial Protection System",
      category: "Embedded/IoT",
      description: "Fire/smoke detection system with GSM alerts, controlling alarms, doors, and lighting. Focus on reliability, power management, and clear architecture.",
      tech: ["ESP32", "SIM800L", "Arduino IDE", "Sensors"],
      highlights: ["Real-time fire detection", "SMS/call alerts via GSM", "Remote control capabilities"],
      repoUrl: "" // Add repo URL when available
    },
    {
      title: "Toy-Store-Web E-commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce with AI chatbot integration. Auth, product management, order flow, and cloud image storage. Deploy-ready for security testing.",
      tech: ["Spring Boot", "MySQL", "REST APIs", "JWT", "Gemini AI", "Cloudinary"],
      highlights: ["JWT authentication", "AI-powered chatbot", "Security testing ready"],
      repoUrl: "" // Add repo URL when available
    },
    {
      title: "Wireless Security Lab",
      category: "Security Research",
      description: "Controlled lab environment for studying Wi-Fi/Bluetooth attack vectors and defenses. Simulating rogue APs, handshake captures, and PoC reproductions.",
      tech: ["ESP32", "Bluetooth adapters", "BlueToolkit", "Rogue Toolkit"],
      highlights: ["Legal controlled testing", "Attack simulation", "Hardening documentation"],
      repoUrl: "" // Add repo URL when available
    }
  ],

  achievements: [
    {
      title: "Web Penetration Testing",
      organization: "Cyber Jutsu Academy",
      year: "2025",
      icon: "certificate",
      link: "/Trương Xuân Nhật .pdf"
    },
    {
      title: "Net Challenge 2025",
      organization: "University of Information Technology (UIT)",
      year: "2025",
      icon: "certificate",
      link: "https://s3.uitiot.vn/uitiot-nc/certs/2025-netchallenge/ChungNhanHoanThanh/2512176082-23162073.jpg"
    },
    {
      title: "First Place — CTF Competition",
      organization: "HCMUTE",
      year: "2024",
      icon: "trophy"
    },
    {
      title: "IELTS 5.5",
      organization: "British Council",
      year: "2022",
      icon: "certificate"
    }
  ]
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" }
];
