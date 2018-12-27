import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'path';
import { reject } from 'q';

export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl):ValidationErrors | null{
        if((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true}

        return null;
    }

    static shouldBeUniqe(control: AbstractControl):ValidationErrors | null{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(control.value === "jjj")
                    resolve({shouldBeUniqe: true});
                else
                    resolve(null);
            },2000);

        });
    }
}