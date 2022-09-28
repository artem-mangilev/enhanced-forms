import { AbstractControl, FormControl } from "@angular/forms";
import { EnhancedFormGroup } from "projects/ngx-enhanced-forms/src/public-api";

interface AuthFormModel {
  login: string;
  password: string;
}

export class AuthForm extends EnhancedFormGroup<AuthFormModel> {
  protected createControls(): { [controlName: string]: AbstractControl<any, any>; } {
    return {
      'login': new FormControl(''),
      'password': new FormControl('')
    }
  }

  public fromApiModel(model: AuthFormModel): void {
    this.controls['login'].setValue(model.login);
    this.controls['password'].setValue(model.password);
  }

  public toApiModel(): AuthFormModel {
    return {
      login: this.controls['login'].value,
      password: this.controls['password'].value,
    }
  }
}
