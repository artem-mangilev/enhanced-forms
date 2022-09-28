import { AbstractControl, FormControl } from "@angular/forms";
import { EnhancedFormGroup } from "../enhanced-form-group";

interface AuthFormModel {
  login: string;
  password: string;
}

export class AuthForm extends EnhancedFormGroup<AuthFormModel> {
  public createControls(): { [controlName: string]: AbstractControl<any, any>; } {
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
      password: this.controls['login'].value,
    }
  }
}
