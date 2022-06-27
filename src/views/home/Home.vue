<template>
  <div class="home">
    <div class="home-header wrap">
      <img class="icon" src="../../assets/imgs/icon_left arrow.png" alt="" />
      <h1>首页</h1>
      <div class="icon"></div>
    </div>

    <div class="home-search wrap">
      <input type="text" class="ipt-search" placeholder="search" />
      <img class="icon" src="../../assets/imgs/icon_magnifier.png" alt="" />
    </div>
    <div class="home-banner wrap">
      <img class="banner-img" src="../../assets/imgs/img_people.png" alt="" />
      <div class="banner-text">
        <div class="banner-title">Mirror guide</div>
        <div>common problem</div>
      </div>
    </div>

    <div class="swiper">
      <div class="swiper-wrap">
        <div class="swiper-item skin-primary">
          <!-- <div class="bg-picture"> -->
          <img class="icon-picture" src="../../assets/imgs/icon_picture.png" />
          <div class="picture-pt">Picture</div>
          <div class="picture-text">Local screencast</div>
          <!-- </div> -->
        </div>

        <div class="swiper-item skin-white">
          <!-- <div class="bg-picture"> -->
          <img class="icon-picture" src="../../assets/imgs/icon_file.png" />
          <div class="picture-pt">Picture</div>
          <div class="picture-text">Local screencast</div>
          <!-- </div> -->
        </div>

        <div class="swiper-item skin-pink">
          <!-- <div class="bg-picture"> -->
          <img class="icon-picture" src="../../assets/imgs/icon_picture.png" />
          <div class="picture-pt">Picture</div>
          <div class="picture-text">Local screencast</div>
          <!-- </div> -->
        </div>
      </div>
    </div>
    <div class="border">
      <div class="screen wrap">
        <img class="screen-img" src="../../assets/imgs/book.png" alt="" />
        <div class="screen-text">
          <div class="screen-title">Screen mirroring</div>
          <div class="screen-m">Moblie screen sharing to TV</div>
        </div>
      </div>
      <div class="last wrap">
        <div class="time">
          <img class="icon" src="../../assets/imgs/icon_suspend.png" alt="" />
          <span>Time out</span>
        </div>
        <div class="end">
          <img
            class="icon"
            src="../../assets/imgs/icon_Powersupply.png"
            alt=""
          />
          <span>End</span>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home {
  min-height: 100vh;
  font-size: 2rem;
  background-color: #d8ccfa;
  border-radius: 3.6rem;
  padding: 2rem 0;
  /* 转怪异盒模型 */
  box-sizing: border-box;
}
.home-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.2rem 1.2rem;
  font-size: 1.2rem;
}
.home-search {
  display: grid;
  grid-template-columns: auto 2.6rem;
  padding: 2rem 2.4rem;
  background-color: #efedfb;
  border-radius: 2rem;
  align-items: center;
}
.ipt-search {
  height: 3rem;
  background-color: #efedfb;
}
.home-banner {
  border-radius: 5rem;
  height: 10rem;
  background-color: #eceaff;
  margin-top: 3.8rem;
  position: relative;
  font-weight: 400;
  display: flex;
  align-items: center;
}

.banner-img {
  width: 9.5rem;
  position: absolute;
  bottom: 0.3rem;
  left: 1.5rem;
}
.banner-text {
  margin-left: 12.6rem;
}
.banner-title {
  font-weight: 600;
  padding: 0.4rem 0;
}
.swiper {
  overflow: hidden;
}
.swiper-wrap {
  /* 超出x轴 滚动 */
  overflow-x: scroll;
  display: flex;
  gap: 0 1rem;
  padding: 0 2.4rem;
}
.swiper-item {
  margin-top: 3rem;
  padding: 3rem 0.5rem;
  border-radius: 2.8rem;
  align-items: center;
  width: 13.5rem;
  display: flex;
  flex-direction: column;
}
.icon-picture {
  border-radius: 2rem;
  padding: 1rem;
  width: 3.5rem;
  height: 4rem;
}
.picture-pt {
  margin-top: 1rem;
  font-weight: 700;
}
.picture-text {
  /* 超出 */
  width: 100%;
  color: #c6c1fb;
  overflow: hidden;
  /* 文本超出省略 */
  text-overflow: ellipsis;
  /* 写的时候不换行 */
  white-space: nowrap;
}
.skin-primary {
  background-color: #7367fb;
  color: #fff;
}
.skin-primary .icon-picture {
  background-color: #d2d5fe;
}

.skin-white {
  background-color: #fff;
  color: black;
}
.skin-white .icon-picture {
  background-color: #ffe9db;
}

.skin-pink {
  background-color: #eceaff;
  color: #cfcad7;
}
.skin-pink .icon-picture {
  background-color: #bfb8fd;
}
.screen {
  margin-top: 2rem;
  height: 12.8rem;
  padding: 2.2rem;
  background-color: #fffffc;
  border-radius: 2.8rem;
  display: flex;
  align-items: center;
}
.screen-text {
  margin-left: 1rem;
}
.screen-img {
  width: 7rem;
}
.screen-m {
  font-size: 10px;
}
/* .border {
  background-color: #e5e2ff;
} */
.last {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 0 6rem;
}
.time,
.end {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-radius: 2rem;
  background-color: #fffffd;
  display: flex;
  box-sizing: border-box;
  white-space: nowrap;
  align-items: center;
  text-align: center;
}
::-webkit-scrollbar {
  display: none;
}
</style>