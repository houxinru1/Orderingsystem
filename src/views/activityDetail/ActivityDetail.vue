<template>
  <div class="box">
    <div class="activity-detail">
        <div class="act">
      <div class="activity-detail-header wrap">
        <img class="icon" src="../../assets/imgs/icon_left-arrow.png" alt="" />
        <h1>点餐状态</h1>
        <div class="icon"></div>
      </div>
      <div class="picture wrap">
        <div class="picture-title">Strong connection ability</div>
        <div class="picture-desc">Cloud projection</div>
        <img src="../../../src/assets/imgs/manwoman.png" alt="" />
      </div>
      </div>

      <div class="info-details">
        <div class="info-hour wrap">
          <div class="hour-title">Remaining time</div>
          <div class="hour">
            <div class="number">6</div>
            <div class="number">6</div>
            <div class="number">9</div>
            <span>hour</span>
            <div class="number">3</div>
            <div class="number">8</div>
            <span>minute</span>
          </div>
        </div>

        <div class="progress">
          <div class="progressbar">
            <span>200 minutes in total</span>
            <span class="progress-hour">13min</span>
          </div>
          <div class="progress-dialog">
            <div class="progress-dialog-ct"></div>
          </div>
          <div class="progressbar">
            <span>288 minutes in total</span>
            <span class="progress-hour">13min</span>
          </div>
          <div class="progress-dialog">
            <div class="progress-dialog-ct"></div>
          </div>

          <div class="progressbar">
            <span>365 minutes in total</span>
            <span class="progress-hour">13min</span>
          </div>
          <div class="progress-dialog">
            <div class="progress-dialog-ct"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.box {
  height: 100vh;
  background-color: #9ba1f6;
}
h1 {
  font-size: 2.3rem;
}
.activity-detail {
 width: 100%;
  position: absolute;
  background-color: #b3b8fc;
  min-height: 100vh;
  font-size: 2rem;
  border-radius: 3.6rem;
 
}
.activity-detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.2rem 1.2rem;
  font-size: 1.2rem;
}
.picture {
  color: #fff;
  width: 32rem;
  height: 29rem;

  padding: 2rem 3rem;
  background-color: #7266fa;
  border-radius: 3.5rem;
  box-sizing: border-box;
}
.picture-title {
  font-weight: 500;
}
.picture-desc {
  font-size: 1.4rem;
  color: #c3bdfd;
}
.info-details {
  padding: 2.4rem 2.6rem;
  background-color: #ffffff;
  border-radius: 3.5rem;
  position: fixed;
  bottom:0;
  /* top: 2rem; */
}
.info-hour {
  background-color: #e5e2ff;
  /* height: 50%; */
  padding: 2rem 4rem;
  border-radius: 3.6rem 3.6rem 0 0;
  text-align: center;
}
.hour-title {
  color: black;
  font-weight: 500;
  padding: 1rem 0;
}
.number {
  width: 2rem;
  height: 2.4rem;
  background-color: #7066ff;
  color: #fff;
  font-size: 1.6rem;
  padding: 0.2rem 0.4rem;
  box-sizing: border-box;
}
.hour {
  display: flex;
  gap: 0 0.6rem;
  font-size: 1.7rem;
}
.progress {
  margin-top: 1rem;
}
.progressbar {
  margin-top: 2rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
}
.progress-hour {
  color: #7066ff;
}
.progress-dialog {
  width: 100%;
  height: 1rem;
  background-color: #f1f2fb;
  border-radius: 1rem;
  margin-top: 1rem;
}
.progress-dialog-ct {
  width: 50%;
  height: 1rem;
  background-color: #7066ff;
  border-radius: 1rem;
}
</style>