/**
 * Created by JPTBB68 on 7/01/2017.
 */
import { Component, Input } from '@angular/core';
import { MyList } from "../Interfaces/list.interface";

@Component({
  selector: 'my-listbox',
  templateUrl: 'app/listBox/listbox.component.html',
  styleUrls: ['app/listBox/listbox.component.css']
})

export class ListboxComponent  {
  @Input() toShowList : MyList;



}


