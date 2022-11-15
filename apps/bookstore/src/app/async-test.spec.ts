import { fakeAsync, flush, tick } from "@angular/core/testing";
import { delay, of } from "rxjs";

describe(('AsyncTest'), () => {
    let flag: boolean;
    beforeEach(() => {
        flag = false;
    });

    it('sync test', () => {
        expect(flag).toBeFalsy();
        flag = true;
        expect(flag).toBeTruthy();
    });

    it('async test', (done: jest.DoneCallback) => {
        setTimeout(() => {
            flag = true;
            expect(flag).toBeTruthy();
            console.log('1');
            done()
        }, 3000);



    });


    it('async test - Observables', (done: jest.DoneCallback) => {
        of(1).pipe(
            delay(3000)
        ).subscribe(() => {
            flag = true;
            expect(flag).toBeTruthy();
            done();
        })
    });

    it('async test - Observables - tick', fakeAsync(() => {
        of(1).pipe(
            delay(3000)
        ).subscribe(() => {
            flag = true;
            
        });

        tick(2000);

        expect(flag).toBeFalsy();
        tick(1000);
        expect(flag).toBeTruthy();
    }));

    it('async test - Observables - flush', fakeAsync(() => {
        setTimeout(() => {
            flag = true;
        }, 2000)

        flush();

        expect(flag).toBeTruthy();
    }));




});