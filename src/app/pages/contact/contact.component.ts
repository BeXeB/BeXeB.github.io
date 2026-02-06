import { Component } from '@angular/core';
import { PageTitleComponent } from "../../components/page-title/page-title.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageTitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
