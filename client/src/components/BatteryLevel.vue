<template>
    <v-progress-circular
      :value="percentage"
      :size="100"
      :width="15"
      :rotate="-180"
      :color="getColor(percentage)"
      :indeterminate=true
    >
      <template v-slot:default="{ value }">
        <div class="progress-text">{{ percentage }}%</div>
        <v-icon :color="getColor(percentage)">
          {{ getIcon(value) }}
        </v-icon>  
      </template>
    </v-progress-circular>
  </template>
  
  <script>
  export default {
    name: 'BatteryLevel',
    data() {
    return {
      percentage: 0
    };
  },

  
    methods: {
      getColor(percentage) {
        if (percentage >= 80) {
          return 'green';
        } else if (percentage >= 50) {
          return 'yellow';
        } else if (percentage >= 20) {
          return 'orange';
        } else {
          return 'red';
        }
      },
      getIcon(value) {
        if (value === 0) {
          return 'mdi-battery-alert';
        } else if (value < 30) {
          return 'mdi-battery-30';
        } else if (value < 60) {
          return 'mdi-battery-60';
        } else if (value < 90) {
          return 'mdi-battery-90';
        } else {
          return 'mdi-battery';
        }
      },
    },

    mounted() {
    // Increment the percentage every 50 milliseconds
    setInterval(() => {
      this.percentage += 1;
      if (this.percentage > 100) {
        this.percentage = 0;
      }
    }, 1000);
  },
  };
  </script>
  