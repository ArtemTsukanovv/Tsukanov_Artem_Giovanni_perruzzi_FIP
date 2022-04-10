(() => {
    leftImages = document.querySelectorAll(".left-images"),
      rightImages = document.querySelectorAll(".right-images"),
      middleImage = document.querySelectorAll(".middle-image");
  
      function ChangeImage(click) {
        const img = document.querySelector(".image1");
        image.src = (".image2");
      }

      function ChangeImage2(click) {
        const img = document.querySelector(".image2");
        image.src = (".image3");
      }

      function ChangeImage3(click) {
        const img = document.querySelector(".image3");
        image.src = (".images4");
      }
  
  
    leftImages.forEach(img => img.addEventListener("click", ChangeImage));
    rightImages.forEach(img => img.addEventListener("click", ChangeImage2));
    middleImage.forEach(img => img.addEventListener("click", ChangeImage3));
  })();