<template>
  <div>
    <mtd-table :data="a" style="width: 500px;">
      <mtd-table-column prop="a" label="123j12l3j">
        <template #default>
          <mtd-carousel v-if="urlListAims.length > 1" class="carousel-container" :autoplay="false" arrow="hover">
            <mtd-carousel-item v-for="(image, index) in urlListAims" :key="index">
              <div class="carousel-item">
                <img :src="image" :data-original="image" @click.stop="onOpenView(index)" />
              </div>
            </mtd-carousel-item>
          </mtd-carousel>
        </template>
      </mtd-table-column>
    </mtd-table>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        a: [{a: 1}],
        urlListAims: ['http://p0.meituan.net/csc/b0528b171fa3f8733679767da7f02f9f126626.png', 'http://p0.meituan.net/csc/b0528b171fa3f8733679767da7f02f9f126626.png']
      }
    },
    methods: {
      change(query) {
          console.log('ccc', query)
      },
      
    }
  }
</script>

<style scoped lang="scss">
.carousel-container {
  width: 200px;
}

.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
}

.single-image {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
}

img {
  max-width: 200px;
  max-height: 200px;
  border-radius: 4px;
  object-fit: cover;
  cursor: pointer;
}

.tile-images {
  display: flex;
  flex-wrap: wrap;

  .tile-image {
    margin-right: 16px;

    img {
      width: 110px;
      height: 110px;
      border-radius: 4px;
      object-fit: cover;
      cursor: pointer;
    }
  }
}

.get-all-images {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  width: 40px;
  background: #f0f0f0;
  border-radius: 6px;
  cursor: pointer;

  .text-tips {
    word-break: break-all;
    cursor: pointer;
    writing-mode: vertical-rl;
    letter-spacing: 0;
    line-height: 20px;
    font-weight: 400;
  }
}

::v-deep {
  .mtd-carousel .mtd-carousel-btn {
    background-color: #999;
  }

  .mtd-carousel .mtd-carousel-btn.mtd-carousel-prev {
    left: 0;
  }

  .mtd-carousel .mtd-carousel-btn.mtd-carousel-next {
    right: 0;
  }

  .mtd-carousel-inside {
    padding-inline-start: 0;
  }
}
</style>
<style lang="scss">
.cs-field-table-container {
  .carousel-container {
    width: 66px;

    img {
      width: 66px;
      height: 66px;
    }

    .carousel-item {
      width: 66px;
      height: 66px;
    }
  }
}
</style>
