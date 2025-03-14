import {Component} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {faPenToSquare} from '@ng-icons/font-awesome/regular';
import {faSolidPen} from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-user-cabinet-top-panel',
  imports: [
    NgIcon
  ],
  templateUrl: './user-cabinet-top-panel.component.html',
  styleUrl: './user-cabinet-top-panel.component.scss'
})
export class UserCabinetTopPanelComponent {
  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faSolidPen = faSolidPen;

  isAdmin() {
    try {

      return localStorage.getItem('login') == 'admin'
    } catch (err) {
      return true
    }
  }
}
