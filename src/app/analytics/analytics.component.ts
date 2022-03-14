import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const meChart = new Chart("meChart", {
      type: 'line',
      data: {
          labels: ['1/20','2/20','3/20'],
          datasets:[{
            label: 'Analytics',
            data: [50, 30, 60],
            fill: false,
            borderColor: 'rgb(0,0,0)',
            tension: 0.1,
            pointStyle: 'circle',
            pointRadius: 8,
            pointHoverRadius: 15,
            pointBorderColor:'rgb(0,0,0)',
    
          }]
      },
      options: {
          // scales: {
          //     y: {
          //         beginAtZero: true
          //     }
          // }
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
