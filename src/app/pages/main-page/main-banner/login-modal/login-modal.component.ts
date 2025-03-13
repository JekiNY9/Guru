import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  imports: [
    FormsModule
  ],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  readonly dialogRef = inject(MatDialogRef<LoginModalComponent>);
  public login = ''
  private router_ = inject(Router)

  goToAdmin() {
    if (this.login == 'admin') {
      localStorage.setItem('login', 'admin')
    } else {
      localStorage.setItem('login', 'user')

    }
    this.dialogRef.close();
    this.router_.navigate(['/userCabinet/dashboard'])
  }
}
