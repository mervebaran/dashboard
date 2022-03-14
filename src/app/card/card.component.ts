import { Component, OnInit } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  result:any;
  coinPrice:any;
  coinName:any;
  chart:any = []

  constructor(private service: AuthService) { 
    Chart.register(...registerables)
  }

  ngOnInit(): void {

    this.service.cryptoData().then((res) => {
      this.result = res
      // console.log(this.result)

      this.coinPrice = this.result.data.coins.map((coin: any) => coin.
      price);
      this.coinName = this.result.data.coins.map((coin: any) => coin.
      name);
      
      console.log(this.coinPrice,this.coinName);

      this.chart = new Chart('myChart', {
        type:'line',
        data: {
          labels: this.coinName,
          datasets:[{
            label: 'Coin Price',
            data: this.coinPrice,
            borderWidth:3,
            fill: false,
            borderColor: 'rgb(255, 20, 147)',
            tension: 0.1
          }]
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
      
      })
    })


  //   const myChart = new Chart("myChart", {
  //     type: 'line',
  //     data: {
  //         labels: ['8/19', '9/19', '10/19', '11/19', '12/19', '1/20','2/20','3/20','4/20','5/20'],
  //         datasets:[{
  //           label: 'Card Balance',
  //           data: [40, 70, 60, 50, 60, 40, 50, 40, 90, 70],
  //           fill: false,
  //           borderColor: 'rgb(255, 20, 147)',
  //           tension: 0.1
  //         }]
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
  // });

  
  }

}



// ngOnInit(): void {

//   const myChart = new Chart("myChart", {
//     type: 'line',
//     data: {
//         labels: ['8/19', '9/19', '10/19', '11/19', '12/19', '1/20','2/20','3/20','4/20','5/20'],
//         datasets:[{
//           label: 'Card Balance',
//           data: [40, 70, 60, 50, 60, 40, 50, 40, 90, 70],
//           fill: false,
//           borderColor: 'rgb(255, 20, 147)',
//           tension: 0.1
//         }]
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
// });


// }