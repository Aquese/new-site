export const mockData = {
  hero: {
    name: "Austin Silano",
    description: "Passionate system administrator and engineer with expertise in infrastructure, security, and enterprise solutions. I specialize in deploying and managing complex IT environments while staying at the forefront of emerging technologies.",
    location: "Los Angeles, CA",
    email: "austin@liliumsecurity.com",
    phone: "(949) 469-1316"
  },
  about: {
    title: "About Me",
    description: "I'm a passionate system administrator and engineer with a strong interest in homelabbing, information security, and network engineering. I enjoy deploying enterprise applications to understand the technological needs of organizations. My expertise includes servers, hypervisors, application deployment, and networking.",
    technologies: ["Palo Alto", "Nutanix", "VMware", "Unifi", "Grafana", "Zabbix", "SentinelOne", "Datadog", "JumpCloud"],
    stats: [
      { label: "Years Experience", value: "3" },
      { label: "Projects Completed", value: "50+" },
      { label: "Certifications", value: "6" },
      { label: "Technologies", value: "25+" }
    ]
  },
  experience: [
    {
      title: "Systems Administrator",
      company: "Advanced Networks",
      period: "2024 - Present",
      description: "Manages servers, infrastructure, and networks for various clients. Develops operational and technical procedures. Creates infrastructure reports and monitors for alerts and outages.",
      technologies: ["VMware", "Nutanix", "Palo Alto", "Grafana", "Zabbix"]
    },
    {
      title: "IT Technician",
      company: "Skydance Interactive",
      period: "2023 - 2024",
      description: "Provisioned user access using Okta, Active Directory, and Jenkins. Onboarded and offboarded users. Troubleshot infrastructure, VPN, and PC issues.",
      technologies: ["Okta", "Active Directory", "Jenkins", "VPN"]
    },
    {
      title: "IT Helpdesk Analyst",
      company: "James Perse",
      period: "2022 - 2023",
      description: "Handled ticketing systems like Spiceworks and ManageEngine. Assisted in onboarding new users. Prioritized and resolved helpdesk tickets.",
      technologies: ["Spiceworks", "ManageEngine", "Active Directory"]
    }
  ],
  skills: {
    categories: [
      {
        name: "Networking & Security",
        skills: [
          { name: "Palo Alto Firewalls", level: 90 },
          { name: "Fortinet", level: 85 },
          { name: "DNS/DHCP/IPAM", level: 88 },
          { name: "VPN Configuration", level: 85 },
          { name: "Identity & Access Management", level: 90 },
          { name: "Security Hardening", level: 87 }
        ]
      },
      {
        name: "Systems Engineering",
        skills: [
          { name: "Windows Server", level: 92 },
          { name: "Linux Administration", level: 88 },
          { name: "Active Directory", level: 90 },
          { name: "VMware vSphere", level: 85 },
          { name: "Nutanix AHV", level: 80 },
          { name: "Hyper-V", level: 82 }
        ]
      },
      {
        name: "Monitoring & Automation",
        skills: [
          { name: "Grafana", level: 88 },
          { name: "Zabbix", level: 85 },
          { name: "Datadog", level: 80 },
          { name: "Ansible", level: 75 },
          { name: "Terraform", level: 70 },
          { name: "PowerShell", level: 90 }
        ]
      }
    ]
  },
  certifications: [
    {
      name: "SSCP",
      fullName: "Systems Security Certified Professional",
      issuer: "ISC²",
      year: "2024",
      icon: "🛡️"
    },
    {
      name: "CySA+",
      fullName: "CompTIA Cybersecurity Analyst",
      issuer: "CompTIA",
      year: "2023",
      icon: "🔍"
    },
    {
      name: "Security+",
      fullName: "CompTIA Security+",
      issuer: "CompTIA",
      year: "2022",
      icon: "🔒"
    },
    {
      name: "Network+",
      fullName: "CompTIA Network+",
      issuer: "CompTIA",
      year: "2021",
      icon: "🌐"
    },
    {
      name: "PenTest+",
      fullName: "CompTIA PenTest+",
      issuer: "CompTIA",
      year: "2023",
      icon: "⚡"
    }
  ],
  projects: [
    {
      title: "Pyzuh",
      description: "An open-source Python library developed to facilitate communication with the Wazuh API.",
      technologies: ["Python", "API", "Security", "Open Source"],
      features: ["API Integration", "Security Monitoring", "Open Source", "Python Library"],
      github: "https://github.com/austinsilano/pyzuh"
    },
    {
      title: "Lilium Enterprise",
      description: "An enterprise designed to test, deploy, and learn about company technological needs, featuring both on-premises servers and cloud infrastructure.",
      technologies: ["VMware", "Cloud", "Infrastructure", "Enterprise"],
      features: ["On-Premises Servers", "Cloud Integration", "Data Backup", "Enterprise Architecture"],
      github: "#"
    },
    {
      title: "Ansible Playbooks",
      description: "Created playbooks to automate and build virtual machines, as well as execute tasks like updating time zones and system updates.",
      technologies: ["Ansible", "Automation", "DevOps", "Infrastructure"],
      features: ["VM Automation", "System Updates", "Configuration Management", "DevOps"],
      github: "https://github.com/austinsilano/ansible-playbooks"
    }
  ],
  contact: {
    title: "Let's Work Together",
    description: "Ready to discuss your next project? I'm always open to new opportunities and interesting challenges.",
    email: "austin@liliumsecurity.com",
    phone: "(949) 469-1316",
    location: "Los Angeles, CA"
  }
};