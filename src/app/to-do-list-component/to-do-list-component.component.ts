import { ChangeDetectionStrategy, ChangeDetectorRef,Component, OnInit,Input } from '@angular/core';
export interface PeriodicElement {
  action: string;
  name: number;
  desc: number;
  isrepeating: string;
}

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ToDoListComponentComponent implements OnInit {
  @Input() data: any;
  doneTaskarraylist:any[]=[];
  panelOpenState = false;

  constructor(private cd: ChangeDetectorRef) {    
   }

  ngOnInit(): void {
    this.cd.detectChanges();

  }


  remove(e:any,val:any){
    console.log(e)
    console.log(val)
    this.data.splice(e,1)
    this.doneTaskarraylist = [...this.doneTaskarraylist, val];


  }
  public doSomething(date: any):void {

console.log(this.doneTaskarraylist)

    console.log('Picked date: ', date);
    this.data = [...this.data, date];
}


}
