import { FormGroup, AbstractControl } from "@angular/forms";

export abstract class EnhancedFormGroup<T> extends FormGroup {
  /**
   * Register controls for this form
   */
  public abstract createControls(): { [controlName: string]: AbstractControl };

  /**
   * Map data from model to form
   *
   * @param model
   */
  public abstract fromApiModel(model: T): void;

  /**
   * Map data from form to model
   */
  public abstract toApiModel(): T;
}