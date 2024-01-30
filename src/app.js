new Vue({
    el: '#app',
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll(); // Apply scaling right away in case images are in view on load
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const windowHeight = window.innerHeight;
        const middleScreen = windowHeight / 2;
        const images = this.$el.querySelectorAll('.row img');
  
        images.forEach(img => {
          const imgRect = img.getBoundingClientRect();
          const imgCenter = imgRect.top + imgRect.height / 2;
          const distanceFromCenter = Math.abs(middleScreen - imgCenter);
          let scale = 0.8; // Start with the initial scale
  
          // Adjust the scaling factor based on the distance from the center
          if (distanceFromCenter < windowHeight / 2) {
            scale += (1 - distanceFromCenter / (windowHeight / 2)) * 0.2; // Adjust the 0.2 value as needed
          }
  
          // Apply the scale transformation
          img.style.transform = `scale(${Math.min(scale, 1)})`; // Ensure scale does not exceed 1
        });
      },
    },
  });
  