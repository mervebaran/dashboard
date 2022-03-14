import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const doChart = new Chart("doChart", {
      type: 'doughnut',
      data: {
        // labels: [
        //   'Red',
        //   'Blue'
        // ],
        datasets: [{
          label: 'My First Dataset',
          data: [30, 13],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255,255,255)'
          ],
          hoverOffset: 4
        }]
    },
    });
  }

}
