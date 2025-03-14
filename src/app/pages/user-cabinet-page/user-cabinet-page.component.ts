import {ApplicationRef, ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {UserCabinetNavComponent} from './components/user-cabinet-nav/user-cabinet-nav.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgIcon} from '@ng-icons/core';
import {faSolidArrowRightFromBracket} from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-user-cabinet-page',
  templateUrl: './user-cabinet-page.component.html',
  styleUrl: './user-cabinet-page.component.scss',
  standalone: true,
  imports: [RouterOutlet, UserCabinetNavComponent, NgIcon, RouterLink]
})
export class UserCabinetPageComponent {
  changeDetections = 0;
  protected readonly faSolidArrowRightFromBracket = faSolidArrowRightFromBracket;
  private count = 0;

  constructor(
    private appRef: ApplicationRef,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    const originalTick = this.appRef.tick;
    this.appRef.tick = () => {
      this.count++;
      originalTick.apply(this.appRef);
    };

    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.zone.run(() => {
          this.changeDetections = this.count;
          console.log(this.changeDetections);
          this.count = 0;
          this.cdr.markForCheck();
        });
      }, 1000);
    });
  }
}
