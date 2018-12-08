import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'objectLength'
})
export class ObjectLengthPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return null;
        // return value ? Object.keys(value) : null;
    }
}
