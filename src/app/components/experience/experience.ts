import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Reveal } from '../../shared/directives/reveal';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

  experienceList: any = [
    {
      id: 1,
      companyName: "DXC Technology",
      companyLogo: "dxc.svg",
      companyUrl: "https://dxc.com",
      position: "Senior Analyst",
      place: "Gurgaon, IN",
      duration: "Oct 2022 - Present",
      summary: "Developing scalable enterprise applications for airline and visa domains with focus on UI performance and modern Angular architecture.",
      techStack: ["Angular 21", 'Angular Material', "OneTrust", "Captcha"],
      responsbilities: [
        "Experienced in the airline and visa domains.",
        "Built scalable Angular modules and reusable UI components.",
        "Integrated REST APIs and third-party services for enterprise workflows.",
        "Improved application performance and maintainability through code optimization.",
        "Collaborated with cross-functional teams in Agile development environment.",
        "Developed React + Tailwind POC for modern UI experimentation."
      ],
      metrics: [
        {
          icon: "bi-lightning-charge",
          value: "30%",
          label: "UI Optimization"
        },
        {
          icon: "bi-boxes",
          value: "10+",
          label: "Reusable Modules"
        },
        {
          icon: "bi-people",
          value: "Agile",
          label: "Team Collaboration"
        }
      ],
      showMore: false
    },
    {
      id: 2,
      companyName: "Mobile Programming India Pvt. Ltd.",
      companyLogo: "mp.svg",
      companyUrl: "https://www.mobileprogramming.com",
      position: "Senior Developer",
      place: "Gurgaon, IN",
      duration: "Apr 2021 - Oct 2022",
      summary: "Worked on enterprise applications focusing on frontend architecture, performance, and business-driven solutions.",
      techStack: ["Angular", "RxJS", "Angular Material", 'SAP Internals'],
      responsbilities: [
        "Developed high-performance responsive UI components.",
        "Collaborated with business teams for requirement analysis and system design.",
        "Delivered scalable frontend solutions aligned with project deadlines.",
        "Maintained clean and structured code following best practices."
      ],
      metrics: [
        {
          icon: "bi-layers",
          value: "20+",
          label: "UI Components"
        },
        {
          icon: "bi-speedometer2",
          value: "High",
          label: "Performance Focus"
        }
      ],
      showMore: false
    },
    {
      id: 3,
      companyName: "MBit Computraining India Pvt. Ltd.",
      companyLogo: "mbit.svg",
      companyUrl: "https://www.mbitindia.com",
      position: "Senior Developer",
      place: "New Delhi, IN",
      duration: "Jul 2018 - Mar 2021",
      summary: "Developed healthcare and manufacturing solutions with focus on responsive UI and REST API integration.",
      techStack: ["Angular 5,7,8", "RxJS", "Bootstrap", "REST APIs"],
      responsbilities: [
        "Built maintainable and scalable frontend modules.",
        "Integrated REST APIs and backend services.",
        "Performed code reviews and maintained coding standards.",
        "Collaborated with developers and business teams."
      ],
      metrics: [
        {
          icon: "bi-hospital",
          value: "2",
          label: "Domains"
        },
        {
          icon: "bi-code-slash",
          value: "Angular",
          label: "Frontend Development"
        }
      ],
      showMore: false
    },
    {
      id: 4,
      companyName: "Atos Global India Pvt. Ltd.",
      companyLogo: "atos.svg",
      companyUrl: "https://atos.net/en/",
      position: "Software Engineer",
      place: "Pune, IN",
      duration: "Jun 2015 - Jun 2018",
      summary: "Worked on retail and manufacturing applications with focus on backend support and enterprise workflows.",
      techStack: ["Service Now", "Toad", "Webmethods", "SQL"],
      responsbilities: [
        "Supported enterprise application development and maintenance.",
        "Worked on requirement gathering and system analysis.",
        "Collaborated with business users and technical teams."
      ],
      metrics: [
        {
          icon: "bi-building",
          value: "Enterprise",
          label: "Applications"
        },
        {
          icon: "bi-diagram-3",
          value: "Cross-Team",
          label: "Collaboration"
        }
      ],
      showMore: false
    }
  ];

  openCompany(event: MouseEvent, url: string) {
    event.stopPropagation(); // prevents accordion toggle
    window.open(url, '_blank');
  }

}
