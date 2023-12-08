import {Component} from '@angular/core';
import {NgbAccordionConfig, } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
  }
}

