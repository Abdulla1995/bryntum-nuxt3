<template>
  <div>
    <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataformat="dataFormat"
        :dataSource="dataSource"
    >
    </fusioncharts>
  </div>
</template>
<script>
const myDataSource = {
  chart: {
    caption: 'Recommended Portfolio Split',
    subCaption: 'For a net-worth of $1M',
    showValues: '1',
    showPercentInTooltip: '0',
    numberPrefix: '$',
    enableMultiSlicing: '1',
    dataLoadStartMessage: 'Loading...',
    yAxisName: 'Total contracts',
    xAxisName: 'Agent',
  },
  data: [
    {
      label: 'Equity',
      value: '300000'
    },
    {
      label: 'Debt',
      value: '230000'
    },
    {
      label: 'Bullion',
      value: '180000'
    },
    {
      label: 'Real-estate',
      value: '270000'
    },
    {
      label: 'Insurance',
      value: '20000'
    }
  ]
};

export default {
  setup() {
    return {
      type: 'column2d',
      width: '500',
      height: '300',
      dataFormat: 'json',
      dataSource: myDataSource
    }
  }
}
</script>
