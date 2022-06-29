<template>
  <div class="box">
    <div class="login">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
  <div class="container">
    <!-- <icon :src="'../../../assets/imgs/icon_'+this.icon+'.png'"> -->
    <!-- <icon src="../../../assets/imgs/icon_fold.png"> -->
    <!-- </icon> -->

    <icon type="fold" class="fold-icon"></icon>

    <div class="title-box">
      <div class="title">Mirroring Cast item</div>
      <div class="desc">Real-time item sharing</div>
    </div>

    <img class="tvicon" src="../../../assets/imgs/img_tv.png" alt="" />
    <login-dialog>
      <info-title>
        <div class="info-title wrap">Please choose</div>
        <div class="info-desc wrap">Choose a itemcast scene</div>
      </info-title>
     
      <from-item>
        <template #icon>
          <icon type="book" size="large" ></icon>
        </template>
        <template #text>
          <div class="item-title">Online video</div>
          <div class="item-desc">Cast online videcs to tv</div>
        </template>
      </from-item>
     <from-item>
        <template #icon>
          <icon type="book" size="large" ></icon>
        </template>
        <template #text>
          <div class="item-title">Online video</div>
          <div class="item-desc">Cast online videcs to tv</div>
        </template>
      </from-item>
    </login-dialog>
  </div>
</template>

<script>
import LoginDialog from "./components/LoginDialog.vue";
import InfoTitle from "./components/InfoTitle.vue";
import FromItem  from "./components/FromItem.vue";
import Icon from "../../../components/Icon.vue";

export default {
  data() {
    return {
      fold:''

    };
  },
  components: {
    LoginDialog,
    InfoTitle,
    FromItem,
    Icon
  },
};
</script>
<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  background-color: #dbd8fb;
  z-index: -99;
}
.login {
  width: 100vw;
  font-size: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 100vh;
  border-radius: 3.6rem;
  overflow: hidden;
  position: absolute;
  z-index: 100;
}
.item:nth-of-type(odd) {
  background: #7c71fe;
}
.item:nth-of-type(even) {
  background: #7367fb;
}

.title-box {
  color: #fff;
  font-size: 2rem;
}
.title-box .title {
  font-weight: 800;
  padding: 0.8rem 0;
}
.title-box .desc {
  font-size: 1.5rem;
  color: #e7ebfe;
}
.container {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 200;
}
.fold-icon,
.title-box {
  margin-top: 2rem;
  margin-left: 4rem;
}
.tvicon {
  width: 25.6rem;
  position: relative;
  left: 6rem;
  bottom: 3rem;
}

.info-title,
.info-desc {
  color: #fff;
  font-size: 1.8rem;
}

.item-title {
  font-size: 1.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.item-img {
  width: 7rem;
}
.item-desc {
  font-size: 1.4rem;
}
.large{
 
}
</style>