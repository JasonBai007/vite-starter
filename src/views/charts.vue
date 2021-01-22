<template>
  <div class="charts-wrap">
    <bai-chart :chartData="chartData" ref="myChart"></bai-chart>
    <niu-button />
  </div>
</template>

<script>
import BaiChart from "@/components/BaiChart.vue";
import NiuButton from '@/components/NiuButton.vue'
export default {
  name: "charts",
  components: {
    BaiChart,NiuButton
  },
  data() {
    return {
      chartData: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
          },
        ],
      },
    };
  },
  mounted() {
    this.$refs.myChart.renderChart();
  },
};
</script>

<style></style>
