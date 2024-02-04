const { createApp } = Vue;

createApp({
  
  data() {
    return {
      images: ["https://drive.google.com/thumbnail?id=1JNEuMBQkj2WerZUXLGNXTbO-y-pTJ-Gs&sz=w1080",
      "https://drive.google.com/thumbnail?id=1zDZJwIB4whY194Rj9OAVt_6dqmOp7pm8&sz=w1080",
      "https://drive.google.com/thumbnail?id=1bmo5nBykgPJOhap-7YWxjlUS5knljQuE&sz=w1080",
      "https://drive.google.com/thumbnail?id=1sMf_vgsmQAJGpu6ih2EXNWw_aN1IyKUY&sz=w1080",
      "https://drive.google.com/thumbnail?id=1Wqk8IPCkE2J8cYWPB9Ni2ENS3x7OyhgV&sz=w1080",
      "https://drive.google.com/thumbnail?id=1fDHBvj75wxSovyZBf7GGrPQzhVvfdYr1&sz=w1080",
      "https://drive.google.com/thumbnail?id=1fDHBvj75wxSovyZBf7GGrPQzhVvfdYr1&sz=w1080",
      "https://drive.google.com/thumbnail?id=1JNEuMBQkj2WerZUXLGNXTbO-y-pTJ-Gs&sz=w1080",
      "https://drive.google.com/thumbnail?id=1sMf_vgsmQAJGpu6ih2EXNWw_aN1IyKUY&sz=w1080",
      "https://drive.google.com/thumbnail?id=1zDZJwIB4whY194Rj9OAVt_6dqmOp7pm8&sz=w1080",
      "https://drive.google.com/thumbnail?id=1bmo5nBykgPJOhap-7YWxjlUS5knljQuE&sz=w1080",
      "https://drive.google.com/thumbnail?id=1Wqk8IPCkE2J8cYWPB9Ni2ENS3x7OyhgV&sz=w1080"],
      imagescol1: [],
      imagescol2: [],
      imagescol3: [],
      imagescol4: [],
      isVisible: false,
    };
  },
  methods: {
    splitImages(){
      this.images.forEach((image, index) => {
        switch (index % 4) {
          case 0:
            this.imagescol1.push(image);
            break;
          case 1:
            this.imagescol2.push(image);
            break;
          case 2:
            this.imagescol3.push(image);
            break;
          case 3:
            this.imagescol4.push(image);
            break;
        }
      });
    },

  },
  mounted() {
    console.log("mounted executed");
    this.splitImages();
  }
}).mount('#app');