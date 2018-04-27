import { Component, OnInit } from '@angular/core';
import { NumberGeneratorService } from './number-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [NumberGeneratorService]
})
export class AppComponent implements OnInit {
  title = 'app';
  valueHTTPFile: number;

  constructor( private _numberGeneratorService: NumberGeneratorService ) {}

  numberGenerator(): number {
    return 42;
  }

  fromNumberGeneratorService(): number {
    return this._numberGeneratorService.value();
  }

  fromNumberGeneratorServiceHTTPFile() {
    this._numberGeneratorService.valueHTTPFile()
      .subscribe(value => this.valueHTTPFile = value.value);
  }

  ngOnInit(): void {
    this.fromNumberGeneratorServiceHTTPFile();
  }
}
