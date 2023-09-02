console.clear();
import { ReplaySubject } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/subjects/replaysubject
// Example 1: simple ReplaySubject

const sub = new ReplaySubject(3);

sub.next(1);
sub.next(2);
sub.subscribe(console.log); // OUTPUT => 1,2
sub.next(3); // OUTPUT => 3
sub.next(4); // OUTPUT => 4
sub.subscribe(console.log); // OUTPUT => 2,3,4 (log of last 3 values from new subscriber)
sub.next(5); // OUTPUT => 5,5 (log from both subscribers)
