import { Component, inject } from '@angular/core';
import { FormsModule,NgForm} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router=inject(Router)
username="admin"
password=1234
onSubmit(form: NgForm){
  if(form.valid){
    this.router.navigate(['/home'])
  }
  
}
}
