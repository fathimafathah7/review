import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  count=signal(0)
  timer:any

  start(){
    if(!this.timer){
      this.timer=setInterval(()=>{
        this.count.update(value=>value+1)
      },1000)
      
    }
  }
  stop(){
    clearInterval(this.timer)
    this.timer=null
    
  }
  reset(){
    this.stop()
    this.count.set(0)
  }
}
