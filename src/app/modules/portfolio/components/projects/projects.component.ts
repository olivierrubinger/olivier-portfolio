import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { inject } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/icons/technologies/github.svg',
      alt: 'Projeto',
      title: 'Este Projeto!',
      width: '150px',
      height: '80px',
      description: 'Acesse o repositório do meu portfólio, construído com Angular e TypeScript.',
      links: [
        {
          name: 'Conheça o repositório do projeto!',
          href: 'https://github.com/olivierrubinger/olivier-portfolio',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
