<script>
    import Carousel from "./svelte-carousel/main.js"
</script>
<div class="albums-container">
    <div class="card album-container" style="width: 18rem;">
        <div class="card-body">
            <Carousel
                let:showPrevPage
                let:showNextPage
                let:pagesCount

            >
                <div slot="prev" on:click={showPrevPage} class="album-arrow album-arrow-prev">
                    <i />
                </div>
                <div slot="next" on:click={showNextPage} class="album-arrow album-arrow-next">
                    <i />
                </div>

                <img src="https://unsplash.it/280/320?random=1" alt="unsplash.it">
                <img src="https://unsplash.it/280/320?random=2" alt="unsplash.it">
                <img src="https://unsplash.it/280/320?random=3" alt="unsplash.it">

            </Carousel>
            <h5 class="card-title">Card title <sub style="color:lightgray;">{3} images</sub></h5>
            <span class="badge bg-info text-dark">Foxes</span>
            <span class="badge bg-info text-dark">Needls</span>
            <span class="badge bg-info text-dark">Rainbows</span>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <a href="./" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

    <div class="card album-container" style="width: 18rem;">
        <div class="card-body">
            <Carousel
                let:showPrevPage
                let:showNextPage

            >
                <div slot="prev" on:click={showPrevPage} class="album-arrow album-arrow-prev">
                    <i />
                </div>
                <div slot="next" on:click={showNextPage} class="album-arrow album-arrow-next">
                    <i />
                </div>

                <img src="https://unsplash.it/280/320?random=2" alt="unsplash.it">
                <img src="https://unsplash.it/280/320?random=3" alt="unsplash.it">
                <img src="https://unsplash.it/280/320?random=4" alt="unsplash.it">

            </Carousel>
            <h5 class="card-title">Card title <sub style="color:lightgray;">3 images</sub></h5>
            <span class="badge bg-info text-dark">Foxes</span>
            <span class="badge bg-info text-dark">Needls</span>
            <span class="badge bg-info text-dark">Rainbows</span>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <a href="./" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

    <div class="card album-container" style="width: 18rem;">
        <div class="card-body">
            <Carousel
                let:showPrevPage
                let:showNextPage

            >
                <div slot="prev" on:click={showPrevPage} class="album-arrow album-arrow-prev">
                    <i />
                </div>
                <div slot="next" on:click={showNextPage} class="album-arrow album-arrow-next">
                    <i />
                </div>

                <img src="https://unsplash.it/280/320?random=3" alt="unsplash.it">
                <img src="https://unsplash.it/280/320?random=4" alt="unsplash.it">
                <img src="https://unsplash.it/280/320?random=5" alt="unsplash.it">

            </Carousel>
            <h5 class="card-title">Card title <sub style="color:lightgray;">3 images</sub></h5>
            <span class="badge bg-info text-dark">Foxes</span>
            <span class="badge bg-info text-dark">Needls</span>
            <span class="badge bg-info text-dark">Rainbows</span>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <a href="./" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

    <div class="card album-container" style="width: 18rem;">
        <div class="card-body">
            <Carousel
                let:showPrevPage
                let:showNextPage

            >
                <div slot="prev" on:click={showPrevPage} class="album-arrow album-arrow-prev">
                    <i />
                </div>
                <div slot="next" on:click={showNextPage} class="album-arrow album-arrow-next">
                    <i />
                </div>

                <img src="https://unsplash.it/280/320?random=5" alt="unsplash.it">
                <img src="https://unsplash.it/280/320?random=6" alt="unsplash.it">
                <img src="https://unsplash.it/280/320?random=7" alt="unsplash.it">

            </Carousel>
            <h5 class="card-title">Card title <sub style="color:lightgray;">3 images</sub></h5>
            <span class="badge bg-info text-dark">Foxes</span>
            <span class="badge bg-info text-dark">Needls</span>
            <span class="badge bg-info text-dark">Rainbows</span>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <a href="./" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

    <div class="card album-container" style="width: 18rem;">
        <div class="card-body">
            <Carousel
                let:showPrevPage
                let:showNextPage

            >
                <div slot="prev" on:click={showPrevPage} class="album-arrow album-arrow-prev">
                    <i />
                </div>
                <div slot="next" on:click={showNextPage} class="album-arrow album-arrow-next">
                    <i />
                </div>

                <img src="https://unsplash.it/280/320?random=6" alt="unsplash.it">
                <img src="https://unsplash.it/280/320?random=7" alt="unsplash.it">
                <img src="https://unsplash.it/280/320?random=8" alt="unsplash.it">

            </Carousel>
            <h5 class="card-title">Card title <sub style="color:lightgray;">3 images</sub></h5>
            <span class="badge bg-info text-dark">Foxes</span>
            <span class="badge bg-info text-dark">Needls</span>
            <span class="badge bg-info text-dark">Rainbows</span>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <a href="./" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

    <div class="card album-container" style="width: 18rem;">
        <div class="card-body">
            <Carousel
                let:showPrevPage
                let:showNextPage

            >
                <div slot="prev" on:click={showPrevPage} class="album-arrow album-arrow-prev">
                    <i />
                </div>
                <div slot="next" on:click={showNextPage} class="album-arrow album-arrow-next">
                    <i />
                </div>

                <img src="https://unsplash.it/280/320?random=1" alt="unsplash.it">
                <img src="https://unsplash.it/280/320?random=2" alt="unsplash.it">
                <img src="https://unsplash.it/280/320?random=3" alt="unsplash.it">

            </Carousel>
            <h5 class="card-title">Card title <sub style="color:lightgray;">3 images</sub></h5>
            <span class="badge bg-info text-dark">Foxes</span>
            <span class="badge bg-info text-dark">Needls</span>
            <span class="badge bg-info text-dark">Rainbows</span>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <a href="./" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

</div>

<style>
    .card {
        text-align: left;
    }
    .card-body{
        padding: 10px;
    }
    .albums-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .album-container {
      /*width: 250px;
      background-color: #c6c6c6;
      padding: 10px;
      */
      
      margin: 5px;
      
      border-radius: 5px;
    }
    .album-title {
      font-size: 16px;
    }
    .album-size {
      font-size: 10px;
      color: #585858;
    }
    .album-tag {
      background-color: #8f8f8f;
      border-radius: 5px;
      padding: 1px 5px;
      color: #ffffff;
      margin-top: 3px;
      margin-bottom: 3px;
      display: inline-block;
      font-size: 10px;
    }
    .album-tag:not(:last-child) {
      margin-right: 3px;
    }
    .album-arrow {
      width: 20px;
      background-color: #000000;
      opacity: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
      transition: opacity 150ms ease;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }
    .album-arrow > i{
      border: solid #1e1e1e;
      border-width: 0 5px 5px 0;
      padding: 5px;
      position: relative;
    }
    .album-container:hover .album-arrow {
      opacity: 0.5;
    }
    .album-arrow-prev {
      left: 0;
    }
    .album-arrow-prev > i {
      transform: rotate(135deg);
      right: -4px;
    }
    .album-arrow-next {
      right: 0;
    }
    .album-arrow-next > i {
      transform: rotate(-45deg);
      left: -4px;
    }
</style>

