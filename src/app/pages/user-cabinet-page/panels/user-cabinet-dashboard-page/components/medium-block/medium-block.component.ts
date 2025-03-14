import {Component, Input} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {faSolidEllipsisVertical, faSolidTable} from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-medium-block',
  imports: [
    NgIcon
  ],
  templateUrl: './medium-block.component.html',
  styleUrl: './medium-block.component.scss'
})
export class MediumBlockComponent {
  @Input() top!: string;

  protected readonly faSolidEllipsisVertical = faSolidEllipsisVertical;
  protected readonly faSolidTable = faSolidTable;
}
