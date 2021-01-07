import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
loginmessage="from login component";
color="green";
getWelcomeMessage(name:string){
return alert(name);

}

getUserDetails(val:any){
  console.log(val);
}

getWelcomeMessage1(e:any){
  return alert(e.value);

  }

val=" this is default value";
isTextBoxDisabled=true;

enabletextbox(){
this.isTextBoxDisabled=false;
}

getAllValues(values: any){
  const formresults=values;
}

showif=false;
col="red1";
arr=["Hari","Kishore","Rayala"];
arrwithobj=[
  {
    name:"hari", age:"40"
  },
  {
    name:"kishore", age:"43"
  },
  {
    name:"rayala", age:"30"
  }
]

isRed=false;
toggleError(){
this.isRed=!this.isRed;

}
}
