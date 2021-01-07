import { Component, OnInit } from '@angular/core';
interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}, {
  type: 'info',
  message: 'This is an info alert',
}, {
  type: 'warning',
  message: 'This is a warning alert',
}, {
  type: 'danger',
  message: 'This is a danger alert',
}, {
  type: 'primary',
  message: 'This is a primary alert',
}, {
  type: 'secondary',
  message: 'This is a secondary alert',
}, {
  type: 'light',
  message: 'This is a light alert',
}, {
  type: 'dark',
  message: 'This is a dark alert',
}
];
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  color = "green";
  val = " this is default value";
  isTextBoxDisabled = true;
  showif = false;
  col = "red1";
  arr = ["Hari", "Kishore", "Rayala"];
  arrwithobj = [
    {
      name: "hari", age: "40"
    },
    {
      name: "kishore", age: "43"
    },
    {
      name: "rayala", age: "30"
    }
  ]

  isRed = false;
  constructor() { this.color = "green"; this.reset();}

  ngOnInit(): void {
  }
  loginmessage = "from login component";

  getWelcomeMessage(name: string) {
    return alert(name);
  }

  getUserDetails(val: any) {
    console.log(val);
  }

  getWelcomeMessage1(e: any) {
    return alert(e.value);
  }

  enabletextbox() {
    this.isTextBoxDisabled = false;
  }

  getAllValues(values: any) {
    const formresults = values;
  }

  toggleError() {
    this.isRed = !this.isRed;
  }

  alerts!: Alert[];
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
