import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() EnvoiTacheEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  envoiForm(form : any)
  {
    form.id=1;
    form.fait=false;
    return form;
  }

}
