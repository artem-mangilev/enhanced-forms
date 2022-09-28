import { Component, OnInit } from '@angular/core';
import { AuthForm } from './forms/auth.form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'enhanced-forms-examples';

  form = new AuthForm();

  public ngOnInit(): void {
    console.log(this.form)
  }

  public onSubmit() {
    console.log(this.form.toApiModel())
  }
}
