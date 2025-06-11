import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Full-Stack Software Engineer',
        p: 'Breach Insurance | Jan 2025 - Present',
      },
      text: '<p>Leading development efforts at a U.S.-based insurtech in the crypto space using React, Next.js, Node.js, and Go. Spearheaded a complete website revamp, boosting performance by 80% with clean, responsive design using TailwindCSS. Developed real-time monitoring features for crypto wallets and optimized CI/CD workflows using Docker, significantly reducing deployment friction.</p>',
    },
    {
      summary: {
        strong: 'Full-Stack Software Engineer',
        p: 'Qintess (TJPA Court) | Apr 2024 - Mar 2025',
      },
      text: '<p>Modernized 14+ legacy judicial systems using Angular, Vue.js, and Java, improving performance by 40% and reducing support requests by 30%. Designed accessible UIs for thousands of users across the state and contributed to complex platforms like CAPjus and Malote Digital. Delivered high-complexity platforms ensuring seamless integration with existing judicial infrastructure.</p>',
    },
    {
      summary: {
        strong: 'Full-Stack Software Engineer (MERN)',
        p: 'Cert One | Sep 2022 - Jul 2023',
      },
      text: '<p>Developed scalable web applications using MERN stack (MongoDB, Express, React, Node.js). Led database migration from SQL to MongoDB, enhancing scalability and performance. Optimized React-based front-end interfaces and integrated RESTful APIs, facilitating seamless communication and secure data exchange.</p>',
    },
    {
      summary: {
        strong: 'Software Engineer & IT Support Technician',
        p: 'i9 Tecnologia BH | Aug 2021 - Sep 2022',
      },
      text: '<p>Designed and implemented responsive web interfaces using React and Node.js, ensuring optimal functionality and user experience across devices. Enhanced application performance through API integration and provided comprehensive IT support, troubleshooting hardware, software, and network issues.</p>',
    },
    {
      summary: {
        strong: 'Full-stack Freelancer',
        p: 'Self-employed | Aug 2020 - Present',
      },
      text: '<p>Creating custom web applications for various clients, exploring their specific needs and delivering tailored solutions. Collaborating with programming teams and continuously learning new technologies to stay current with industry trends.</p>',
    },
  ]);
}
