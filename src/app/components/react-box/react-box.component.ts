import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewEncapsulation
} from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactBox } from "./ReactBox";

@Component({
  selector: "app-react-box",
  template: '<div>react-box works!</div>',
  styleUrls: ["./react-box.component.scss", "./styles.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ReactBoxComponent implements OnChanges, OnDestroy, AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngOnDestroy(): void {
    ReactDOM.unmountComponentAtNode(this.elementRef.nativeElement);
  }

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  render() {
    const reactBox = React.createElement(ReactBox);
    ReactDOM.render(reactBox, this.elementRef.nativeElement);
  }
}
