import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CenterComponent {

}
