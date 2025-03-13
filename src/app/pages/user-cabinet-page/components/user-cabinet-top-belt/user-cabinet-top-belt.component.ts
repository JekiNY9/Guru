import {AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {faSolidArrowRightFromBracket, faSolidArrowTurnUp, faSolidChargingStation, faSolidPerson, faSolidUsers} from '@ng-icons/font-awesome/solid';
import {faChartBar, faKeyboard} from '@ng-icons/font-awesome/regular';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {PreferencesModalComponent} from '../../panels/user-cabinet-dashboard-page/modals/preferences-modal/preferences-modal.component';

@Component({
  selector: 'app-user-cabinet-top-belt', standalone: true,
  templateUrl: './user-cabinet-top-belt.component.html',
  imports: [
    NgIcon
  ],
  styleUrl: './user-cabinet-top-belt.component.scss'
})
export class UserCabinetTopBeltComponent implements AfterViewInit, OnDestroy {
  isOpen = false
  @ViewChild('dropDown') dropDown: ElementRef | undefined;
  @ViewChild('button') button: ElementRef | undefined;
  protected readonly faSolidPerson = faSolidPerson;
  protected readonly onabort = onabort;
  protected readonly faChartBar = faChartBar;
  protected readonly faSolidArrowRightFromBracket = faSolidArrowRightFromBracket;
  protected readonly faSolidArrowTurnUp = faSolidArrowTurnUp;
  protected readonly faSolidUsers = faSolidUsers;
  protected readonly faKeyboard = faKeyboard;
  protected readonly faSolidChargingStation = faSolidChargingStation;
  private router = inject(Router)
  private ngbModal = inject(MatDialog)

  ngAfterViewInit() {
    document.addEventListener('click', this.onDocumentClick);
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.onDocumentClick);
  }

  onDocumentClick = (event: MouseEvent) => {
    const clickInsideDropDown = this.dropDown?.nativeElement.contains(event.target);
    const clickInsideButton = this.button?.nativeElement.contains(event.target);

    if (!clickInsideDropDown && !clickInsideButton) {
      this.isOpen = false;
    }
  };

  isAdmin() {
    try {

      return localStorage.getItem('login') == 'admin'
    } catch (err) {
      return true
    }
  }

  logOut() {
    this.router.navigate(['/'])
  }

  openPreferences() {
    this.ngbModal.open(PreferencesModalComponent, {panelClass: 'preferencesModal'})
  }
}
