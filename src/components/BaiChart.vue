<template>
  <div class="chartWrap">
    <!-- 这里是要渲染的图表 -->
    <div :id="chartId" style="height:380px;"></div>
  </div>
</template>
<script>
// 好像只能这样引入 echarts
import * as echarts from "echarts";
export default {
  name: "bai-chart",
  props: {
    chartData: {
      type: Object,
      required: true,
      // 对象或数组默认值必须从一个工厂函数获取
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      // myChartData: this.chartData  // 不再组件内放置一个变量，接收传入的对象
    };
  },
  computed: {
    // 生成随机字符，保证每个图表实例的ID都是唯一的
    chartId() {
      return Math.random().toString(36).substr(2);
    },
    // 根据唯一的ID，初始化一个图表实例
    myChart() {
      return echarts.init(document.getElementById(this.chartId));
    },
  },
  mounted() {
    // 监听窗口变化，一旦变化，立刻调用echarts的API，进行重新渲染
    window.onresize = () => {
      this.myChart.resize();
    };
  },
  beforeUnmount() {
    // 销毁前取消监听
    window.onresize = null;
  },
  methods: {
    renderChart() {
      // 每次渲染前，得先清除掉上一次渲染的配置数据
      this.myChart.clear();
      this.myChart.setOption(this.chartData);
    },
  },
  watch: {
    // 深度监听传入的数据变化，一定加deep属性哦
    chartData: {
      handler(v, o) {
        // this.myChartData = v;
        this.renderChart();
      },
      deep: true,
    }    
  },
};
</script>
<style lang="scss">
#myChartWrap {
  width: 100%;
}
</style>
