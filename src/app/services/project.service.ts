import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      slug: 'angular-portfolio',
      name: 'Angular Portfolio',
      description:
        'A portfolio website built with Angular to showcase my projects.',
      imageUrl: '/assets/images/angular-portfolio.jpg',
      repoUrl: 'https://github.com/BeXeB/BeXeB.github.io',
      projectUrl: 'https://bexeb.github.io/',
      fileName: 'angular-portfolio.md',
    },
    {
      slug: 'graphite',
      name: 'Graphite',
      description:
        `A custom object-oriented programming language
        focused on simplifying graph manipulation with specialized operations
        and enabling graph visualization through DOT integration.`,
      imageUrl: '/assets/images/graphite.jpg',
      repoUrl: 'https://github.com/BeXeB/Graphite',
      fileName: 'graphite.md',
    },
    {
      slug: 'sc2-bot',
      name: 'MontyBot',
      description:
        `An intelligent agent capable of playing StarCraft II.
        The agent utilized Monte-Carlo Tree Search for Action selection
        and Neural Networks to analyze the state of the game.`,
      imageUrl: '/assets/images/sc2-bot.jpg',
      repoUrl: 'https://github.com/BeXeB/SC2Bot',
      fileName: 'sc2-bot.md',
    },
    {
      slug: 'Programmable Behaviours',
      name: 'Programmable Behaviours',
      description:
        `A system which allows developers to expose the code of objects,
        allowing players to interactively modify in-game behaviour
        through a custom scripting language.`,
      imageUrl: '/assets/images/programmable-behaviours.jpg',
      repoUrl: 'https://github.com/BeXeB/FinalProject',
      fileName: 'programmable-behaviours.md',
    },
  ];

  private projectMap: Map<string, Project> = new Map();

  constructor(private http: HttpClient) {
    this.loadProjects();
  }

  private async loadProjects(): Promise<void> {
    for (const project of this.projects) {
      const content = await lastValueFrom(
        this.http.get(`assets/projects/${project.fileName}`, {
          responseType: 'text',
        }),
      );
      this.projectMap.set(project.slug, { ...project, content });
    }
  }

  getProjects(): Project[] {
    return this.projects;
  }

  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    const cachedProject = this.projectMap.get(slug);
    if (cachedProject) {
      return cachedProject;
    }

    const project = this.projects.find((p) => p.slug === slug);

    if (!project) {
      return undefined;
    }

    const content = await lastValueFrom(
      this.http.get(`assets/projects/${project.fileName}`, {
        responseType: 'text',
      }),
    );

    const fullProject = { ...project, content };

    this.projectMap.set(slug, fullProject);
    return fullProject;
  }
}
