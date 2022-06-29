<template>
  <div class="form-item wrap">
    <slot name="icon">icon</slot>
    <div class="item-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<style scoped>
.form-item {
  margin-top: 2rem;
  height: 12.8rem;
  padding: 2.2rem;
  background-color: #fffffc;
  border-radius: 2.8rem;
  display: flex;
  align-items: center;
}
.item-text {
  margin-left: 1rem;
  width: 60rem;
  overflow: hidden;
  /* 文本超出省略 */
  text-overflow: ellipsis;
  white-space: nowrap;

}
</style>