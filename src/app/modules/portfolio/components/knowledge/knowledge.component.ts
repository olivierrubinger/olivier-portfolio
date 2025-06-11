import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/technologies/react.svg',
      alt: 'Ícone de conhecimento de react',
      tooltip: 'React/Next.js',
    },
    {
      src: 'assets/icons/technologies/node.svg',
      alt: 'Ícone de conhecimento de node',
      tooltip: 'Node.js',
    },
    {
      src: 'assets/icons/technologies/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
      tooltip: 'JavaScript/TypeScript',
    },
    {
      src: 'assets/icons/technologies/go.svg',
      alt: 'Ícone de conhecimento de go',
      tooltip: 'Go',
    },
    {
      src: 'assets/icons/technologies/angular.svg',
      alt: 'Ícone de conhecimento de angular',
      tooltip: 'Angular',
    },
    {
      src: 'assets/icons/technologies/vue.svg',
      alt: 'Ícone de conhecimento de vue',
      tooltip: 'Vue.js',
    },
    {
      src: 'assets/icons/technologies/java.svg',
      alt: 'Ícone de conhecimento de java',
      tooltip: 'Java',
    },
    {
      src: 'assets/icons/technologies/docker.svg',
      alt: 'Ícone de conhecimento de docker',
      tooltip: 'Docker',
    },
    {
      src: 'assets/icons/technologies/github.svg',
      alt: 'Ícone de conhecimento do Github',
      tooltip: 'GitHub/GitLab',
    },
  ]);

  onMouseEnter(event: any): void {
    const element = event.target;

    // Prevent multiple flips by disabling pointer events during animation
    if (!element.classList.contains('flipping')) {
      element.classList.add('flip', 'flipping');
      element.style.pointerEvents = 'none'; // Disable further events during animation

      setTimeout(() => {
        element.classList.remove('flip');
        setTimeout(() => {
          element.classList.remove('flipping');
          element.style.pointerEvents = 'auto'; // Re-enable pointer events after animation
        }, 500); // Prevents re-flipping immediately
      }, 500); // Duration of the animation
    }
  }
}
