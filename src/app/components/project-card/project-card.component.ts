import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project: Project | undefined;
}
