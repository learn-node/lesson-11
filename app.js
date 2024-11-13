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






import { delay, mergeMap, of } from "rxjs";

const source$ = of("A", "B");

source$
  .pipe(mergeMap((value) => of(`${value} - transformed`).pipe(delay(1000))))
  .subscribe((result) => console.log(result));
