import { Component, inject } from '@angular/core';
import { FormsModule,NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authservice=inject(AuthService)
  private router=inject(Router)
username="admin"
password=1234
onSubmit(form: NgForm){
  if(!form.valid){
    return
  }
  if(this.username=='admin' && this.password==1234){
    this.authservice.isLoggedIn=true
    this.router.navigate(['/home'])
  }
  
}
}
