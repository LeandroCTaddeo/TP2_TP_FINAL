<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-ride="carousel" data-interval="3000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/Images/imagen1.png" class="d-block w-100" alt="Imagen 1">
        </div>
        <div class="carousel-item">
          <img src="@/assets/Images/imagen2.png" class="d-block w-100" alt="Imagen 2">
        </div>
        <div class="carousel-item">
          <img src="@/assets/Images/imagen3.png" class="d-block w-100" alt="Imagen 3">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleAutoplaying" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleAutoplaying" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CarouselComponent'
  }
  </script>
  
  <style scoped>

  </style>
  