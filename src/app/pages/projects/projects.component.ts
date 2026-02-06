import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, PageTitleComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  async ngOnInit() {
    this.projects = await this.projectService.getProjects();
  }
}
