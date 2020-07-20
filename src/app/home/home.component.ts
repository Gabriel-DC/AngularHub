import { Component, ElementRef } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {  

  /* constructor(private _elementRef :ElementRef) {} */

  user: String = '';
  async buscar() {    
    await axios.get('https://api.github.com/users/'+this.user+'/repos').then((res) => { // RETORNA TODOS OS REPOSITÓRIOS DO USUÁRIO DO INPUT
      console.log(res.data);
    })
    /* const container = this._elementRef.nativeElement.querySelector('.container');
    container.style.visibility = 'hidden';   */  
  }  
}
