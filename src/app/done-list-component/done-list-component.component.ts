import { ChangeDetectionStrategy, ChangeDetectorRef,Component, OnInit,Input ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DoneListComponentComponent implements OnInit {
  @Input() data: any;
  @Output() onDatePicked = new EventEmitter<any>();

  constructor(private cd: ChangeDetectorRef) {    
  }
  ngOnInit(): void {
    // console.log(this.todoTaskarraylist)
    this.cd.detectChanges();

  }
  public removefromdone(date: any,i:any): void {
    console.log(i)
this.data.splice(i,1)
    console.log(this.data,date)
    this.onDatePicked.emit(date);
}
}
