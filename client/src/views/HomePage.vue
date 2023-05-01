<template>
    <div>
      <battery-level></battery-level>
    
    </div>
  </template>
  
  <script>
  import BatteryLevel from '@/components/BatteryLevel.vue'

  
  export default {
    name: 'HomePage',
    components: {
      BatteryLevel,
   
    }
  }
  </script>
  