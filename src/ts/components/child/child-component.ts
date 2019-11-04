import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Items } from "src/ts/models/child";

@Component({
  selector: "child",
  styleUrls: ["./child.component.scss"],
  templateUrl: "./child.component.html"
})
export class ChildComponent implements OnInit {
  public items: Array<Items>;
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

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    console.log(this.items);
  }

  ngOnInit(): void {
    /* null */
  }
}
