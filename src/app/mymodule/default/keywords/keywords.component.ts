import { Component } from '@angular/core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent {


  listOfData = [
    {
      keyword: 'cost',
      may_include: 'profit',
      not_include: 'sales',
      frequency: '100'
    },
    {
      keyword: 'sales',
      may_include: 'increase',
      not_include: 'decrease',
      frequency: '100'
    },
  ];

  constructor(){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
