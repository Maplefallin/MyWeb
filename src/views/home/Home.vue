<template>
  <BaseEcharts :options="options" height="300px" />
</template>

<script lang="ts" setup>
import BaseEcharts from "@/components/baseEcharts/index.vue";

const options = {
  title: {
    text: "使用示例",
    subtext: "二级标题",
    subTextStyle: {
      fontSize: 16,
      fontWeight: "normal",
      left: "center",
      y: "center",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        width: 1,
        color: "#008000",
      },
    },
  },
  grid: {
    left: "1%",
    right: "1%",
    bottom: "1%",
    top: "60px",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
    axisLabel: {
      interval: 0,
      rotate: 30,
    },
  },
  yAxis: {
    axisLabel: {
      formatter: (val: number) => {
        return val;
      },
    },
  },
  series: [
    {
      name: "收入",
      type: "bar",
      stack: "Total",
      data: [200, 301, 402, 503, 604, 705, 806],
    },
    {
      name: "支出",
      type: "line",
      stack: "Total",
      data: [100, 210, 1020, 230, 20, 250, 60],
    },
  ],
};
</script>
