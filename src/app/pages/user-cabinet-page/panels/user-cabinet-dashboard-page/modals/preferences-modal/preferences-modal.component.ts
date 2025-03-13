import {Component, inject} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {NgIcon} from '@ng-icons/core';
import {faBrandScreenpal} from '@ng-icons/font-awesome/brands';
import {faBell, faFaceSmile} from '@ng-icons/font-awesome/regular';
import {faSolidEarthEurope, faSolidGears, faSolidPalette, faSolidPerson} from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-preferences-modal',
  imports: [
    NgIcon
  ],
  templateUrl: './preferences-modal.component.html',
  styleUrl: './preferences-modal.component.scss'
})
export class PreferencesModalComponent {
  readonly dialogRef = inject(MatDialogRef<PreferencesModalComponent>);
  protected readonly faBrandScreenpal = faBrandScreenpal;
  protected readonly faBell = faBell;
  protected readonly faSolidEarthEurope = faSolidEarthEurope;
  protected readonly faSolidGears = faSolidGears;
  protected readonly faSolidPalette = faSolidPalette;
  protected readonly faSolidPerson = faSolidPerson;
  protected readonly faFaceSmile = faFaceSmile;
}
