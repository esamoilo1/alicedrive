import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({name: 'tourFilter'})
export class TourFilterPipe implements PipeTransform {
    transform(tourList: any[], searchStr: string, date: string) {
        if (tourList.length === 0 || searchStr === '') {
            return tourList;
        }
        return tourList.filter(tour => tour[date].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);

    }
}


