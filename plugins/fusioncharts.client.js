import VueFusionCharts from 'vue-fusioncharts';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueFusionCharts, FusionCharts , Charts)
})
