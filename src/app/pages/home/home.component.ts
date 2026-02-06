import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  openCV() {
    window.open('https://github.com/BeXeB/CV/blob/main/CVs/Bence_CV_DK.pdf', '_blank');
  }
}
