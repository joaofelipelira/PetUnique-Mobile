import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'togglePassword'
})
export class TogglePasswordPipe implements PipeTransform {
  transform(value: string, showPassword: boolean): string {
    return showPassword ? value : '*****';  // Exibe a senha ou a máscara conforme o valor de showPassword
  }
}