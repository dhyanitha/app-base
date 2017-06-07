import { Component, OnInit } from '@angular/core';
import { BusService } from 'app/core/shared/bus.service';
import { IMessage, Level } from 'app/core/shared/toast/toast.component';

@Component({
  selector: 'ab-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  public show: boolean;
  public text = '';
  public level: Level;
  constructor(private bus: BusService) { }

  ngOnInit() {
    this.bus
      .getMessage$()
      .subscribe((message: IMessage) => {
        console.log(JSON.stringify(message));
        this.text = message.text;
        this.level = message.level;
        this.show = true;
      });
  }

}
