import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { MarkdownService } from '../../services/markdown.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PageTitleComponent } from "../../components/page-title/page-title.component";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  project?: Project;
  htmlContent?: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private markdownService: MarkdownService,
    private sanitizer: DomSanitizer
  ) {}

  async ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = await this.projectService.getProjectBySlug(slug ?? '');
    const markdown = this.project?.content ?? '';
    if (markdown) {
      const rawHtml = await this.markdownService.convertToHtml(markdown);
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(rawHtml);
    }
  }
}
