/*
import { of, interval } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

const firstObservable = of('Перший потік');
const secondObservable = () => interval(1000).pipe(take(3));

// Вкладений subscribe

firstObservable.subscribe(data1 => {
    secondObservable().subscribe(data2 => {
        console.log('Вкладений subscribe:', data2);
    });
});
*/

/*
*/
import { of, map, interval, take, mergeMap } from "rxjs";

const root  = of('Послідовний потік');
const tick = interval(1000).pipe(take(3));

root
    .pipe(
        mergeMap(str => tick.pipe(map(idx => `${str} ${idx}`)))
    )
    .subscribe(result => {
        console.log(result);
    });