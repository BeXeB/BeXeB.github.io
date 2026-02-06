import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {
  @Input() title: string = '';
  @Input() backLink: string = '/';
}
