import {Component, Input} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {faSolidEllipsis, faSolidEllipsisVertical} from '@ng-icons/font-awesome/solid';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-mini-block',
  imports: [
    NgIcon,
    NgStyle
  ],
  templateUrl: './mini-block.component.html',
  styleUrl: './mini-block.component.scss'
})
export class MiniBlockComponent {
  @Input() top!: any;
  @Input() value!: number;
  @Input() height: string = '130px';

  protected readonly faSolidEllipsis = faSolidEllipsis;
  protected readonly faSolidEllipsisVertical = faSolidEllipsisVertical;
}
