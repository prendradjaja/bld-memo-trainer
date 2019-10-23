import { Component, OnInit } from "@angular/core";
import { Coords, subtract, add } from "src/coords";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnInit {
  ballCoords = {
    x: 100,
    y: 100,
  };
  // Where the mouse was when user started dragging. Null if not dragging.
  dragStartCoords = null;
  // Where the ball was when user started dragging. Null if not dragging.
  ballDragStartCoords = null;

  constructor() {}

  ngOnInit() {}

  handleMouseDown(event: MouseEvent) {
    this.dragStartCoords = this.getCoords(event);
    this.ballDragStartCoords = { ...this.ballCoords };
  }

  handleMouseUp() {
    this.dragStartCoords = null;
  }

  handleMouseMove(event: MouseEvent) {
    if (this.isDragging()) {
      const offset = subtract(this.getCoords(event), this.dragStartCoords);
      this.ballCoords = add(this.ballDragStartCoords, offset);
    }
  }

  private getCoords(event: MouseEvent): Coords {
    return {
      x: event.clientX,
      y: event.clientY,
    };
  }

  private isDragging(): boolean {
    return !!this.dragStartCoords;
  }
}
