import { Component} from '@angular/core';
import { Http,Response } from '@angular/http';
import { CurdService } from './curd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  value="";
  buffer="";
  todos:any=[];
  constructor(private service : CurdService){
    this.readList();
  }
  readList(){
    this.service.read()
      .subscribe(
        (res:Response) => {
          this.todos = res.json();
        }
      );
  }

  addList(input){
    this.value = input.value;
    this.service.add(this.value)
    .subscribe(
      (res:Response) => {
          console.log(res.json());
      }
    );
    this.readList();
    //clears the input field after adding
    input.value='';

  }
  updateList(input,id){
    this.buffer = input.innerHTML;
    this.service.update(this.buffer,id)
    .subscribe(
      (res:Response) => {
          console.log(res.json());
      }
    );
    this.readList();
  }
  deleteList(input){
    this.buffer = input;
    this.service.delete(this.buffer)
    .subscribe(
      (res:Response) => {
          console.log(res.json());
      }
    );
    this.readList();
  }
}
