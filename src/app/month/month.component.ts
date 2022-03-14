import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const nyChart = new Chart("nyChart", {
      type: 'line',
      data: {
          labels: ['8/19', '9/19', '10/19', '11/19', '12/19', '1/20','2/20','3/20','4/20','5/20'],
          datasets:[{
            label: 'Card Balance',
            data: [40, 70, 60, 50, 60, 40, 50, 40, 90, 70],
            fill: false,
            borderColor: 'rgb(255,255,255)',
            tension: 0.5
          }]
      },
      options: {
          // scales: {
          //     y: {
          //         beginAtZero: true
          //     }
          // },
          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              grid: {
                display: false
              }
            }
          }
      }
  });
  }

}
