import { Component, OnInit } from "@angular/core";
import { moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "child",
  styles: ["./child.component.scss"],
  template: "./child.component.html"
})
export class ChildComponent implements OnInit {
  public items: any;
  public isOpen: boolean;
  constructor() {
      this.items = [
        { name: "1", order: 0 },
        { name: "2", order: 1 },
        { name: "3", order: 2 },
        { name: "4", order: 3 },
        { name: "5", order: 4 }
      ];
  }

  drop(event: any) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log(this.items);
  }

  ngOnInit() {}
}
