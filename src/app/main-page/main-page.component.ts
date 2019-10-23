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

  handleTouchStart(event: TouchEvent) {
    this.dragStartCoords = this.getCoordsFromTouchEvent(event);
    this.ballDragStartCoords = { ...this.ballCoords };
  }

  handleTouchEnd() {
    this.dragStartCoords = null;
  }

  handleTouchMove(event: TouchEvent) {
    if (this.isDragging()) {
      const offset = subtract(
        this.getCoordsFromTouchEvent(event),
        this.dragStartCoords
      );
      this.ballCoords = add(this.ballDragStartCoords, offset);
    }
  }

  handleMouseDown(event: MouseEvent) {
    this.dragStartCoords = this.getCoordsFromMouseEvent(event);
    this.ballDragStartCoords = { ...this.ballCoords };
  }

  handleMouseUp() {
    this.dragStartCoords = null;
  }

  handleMouseMove(event: MouseEvent) {
    if (this.isDragging()) {
      const offset = subtract(
        this.getCoordsFromMouseEvent(event),
        this.dragStartCoords
      );
      this.ballCoords = add(this.ballDragStartCoords, offset);
    }
  }

  private getCoordsFromTouchEvent(event: TouchEvent): Coords {
    return {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  }

  private getCoordsFromMouseEvent(event: MouseEvent): Coords {
    return {
      x: event.clientX,
      y: event.clientY,
    };
  }

  private isDragging(): boolean {
    return !!this.dragStartCoords;
  }
}
