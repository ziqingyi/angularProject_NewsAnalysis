import { Component } from '@angular/core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent {

  isVisible = false;
  isOkLoading= false;//Whether to apply loading visual effect for OK button or not

  inputData={
    keyword:"",
    may_keyword:"",
    nokeyword:"",
    frequency:""
  }
  
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

   showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }



}
