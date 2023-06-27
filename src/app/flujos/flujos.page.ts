import { Component, OnInit } from '@angular/core';
import { FlujoService } from './services/flujo.service';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-flujos',
  templateUrl: './flujos.page.html',
  styleUrls: ['./flujos.page.scss'],
})
export class FlujosPage implements OnInit {
  constructor(private flujoService: FlujoService) {}

  ngOnInit() {
    this.generateChart();
  }

  generateChart() {
    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'pie',
        width: 450
      },
      labels: [],
      series: [],
      colors: ['#FF0000', '#00FF00'], // Colores personalizados
      tooltip: {
        y: {
          formatter: function (value: number) {
            return `$${value}`;
          },
        },
      },
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    this.flujoService.getIngresosEgresos().subscribe((data) => {
      const labels = ['Ingresos', 'Egresos'];
      const series = [data.ingresos, data.egresos];
      const colors = ['#0B84A5', '#F6C85F']; // Colores personalizados

      chart.updateOptions({
        labels: labels,
        series: series,
        colors: colors,
        legend: {
        position: 'bottom',
        fontSize: '25px',
        
      }})
    });
  }
}
