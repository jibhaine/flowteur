import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { v4 } from 'uuid';

const MAX_BUBBLES = 42;
const WIDTH = 160;
const HEIGHT = 90;
/**
 * Velocity is a vector applied on
 * It represents direction + speed.
 * Values range from -1 to +1
 */
export interface Velocity {
  dx: number;
  dy: number;
}
export interface Particle {
  id: string;
  x: number;
  y: number;
  r: number;
  v?: Velocity;
}
/**
 * This component manages two particles system to animate circles with a gooey effect.
 * Big circles take 12% of the heigh
 */
@Component({
  selector: 'flw-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.css'],
})
export class AquariumComponent implements OnInit {
  public circles: Particle[] = [];

  public bubbles: Particle[] = [];
  constructor(private zone: NgZone, private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    // start frame
    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(this.tick);
    });
    for (let i = 0; i < MAX_BUBBLES; i++) {
      this.circles.push(this.generateBubble());
    }
  }

  public tick = (i) =>  {
    // console.log(i);
    this.circles.filter(() => true).forEach(particle => {
      particle.x += particle.v.dx;
      particle.y += particle.v.dy
    });
    /*
    this.zone.run(()=>{
      this.changeDetector.detectChanges();
    });
    */
    requestAnimationFrame(this.tick);
  }

  public generateBubble(): Particle {
    return {
      x: parseInt('' + Math.random() * WIDTH),
      y: parseInt('' + Math.random() * HEIGHT),
      r: 10,
      v: {
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 - 1,
      },
      id: v4(),
    };
  }
  public generateCircle(x, y): Particle {
    return;
  }
  public trackByUUID(item: Particle){
    return item.id;
  }
}
