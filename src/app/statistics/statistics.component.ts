import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
// import { WeatherService } from './weather.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  // chart = [];
  

  constructor() {
    Chart.register(...registerables)
   }
  // private _weather: WeatherService
  ngOnInit(): void {

    // this._weather.dailyForecast()
    // .subscribe(res => {
      
    //   let temp_max = res['list'].map((res: { main: { temp_max: any; }; }) => res.main.temp_max)
    //   let temp_min = res['list'].map((res: { main: { temp_min: any; }; }) => res.main.temp_min)
    //   let alldates = res['list'].map((res: { dt: any; }) => res.dt)

    //   let weatherDates: string[] = []
    //   alldates.forEach((res: number) => {
    //     let jsdate = new Date(res * 1000)
    //     weatherDates.push(jsdate.toLocaleDateString('en',{ year:'numeric', month: 'short', day:'numeric'}))
    //   })

    //   this.chart = new Chart('canvas', {
    //     type: 'line',
    //   data: {
          
    //       labels: weatherDates,
    //       datasets: [{
    //         label: 'Received',
    //         data: temp_max,
    //         fill: false,
    //         stepped: true,
    //         borderWidth: 1,
    //        },
    //       {
    //         label: 'Transfered',
    //         data: temp_min,
    //         fill: false,
    //         stepped: true,
    //         borderWidth: 1,
    //     },
    //   ]
    // },
    // options: {
    //     scales: {
    //       x: {
    //         grid: {
    //           display: false
    //         }
    //       },
    //       y: {
    //         grid: {
    //           display: false
    //         }
    //       }
    //     }
    // }
    //   })

    // })


    const youChart = new Chart("youChart", {
      type: 'line',
      data: {
          
          labels: ['0', '100', '200', '300', '400', '500'],
          datasets: [{
            label: 'Received',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            stepped: true,
            borderWidth: 1,
        },
        {
            label: 'Transfered',
            data: [10, 15, 10, 15, 17, 13],
            fill: false,
            stepped: true,
            borderWidth: 1,
        },
      ]
    },
    options: {
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


// ngOnInit(): void {

//     const youChart = new Chart("youChart", {
//       type: 'line',
//       data: {
          
//           labels: ['0', '100', '200', '300', '400', '500'],
//           datasets: [{
//             label: 'Received',
//             data: [12, 19, 3, 5, 2, 3],
//             fill: false,
//             stepped: true,
//             borderWidth: 1,
//         },
//         {
//             label: 'Transfered',
//             data: [10, 15, 10, 15, 17, 13],
//             fill: false,
//             stepped: true,
//             borderWidth: 1,
//         },
//       ]
//     },
//     options: {
//         scales: {
//           x: {
//             grid: {
//               display: false
//             }
//           },
//           y: {
//             grid: {
//               display: false
//             }
//           }
//         }
//     }
//     });
    
//   }
