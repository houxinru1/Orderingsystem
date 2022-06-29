<template>
  <img :src="imgUrl[type]" alt=""  :class="{large:size=='large'}"/>
</template>
<script>
import fold from "../assets/imgs/icon_fold.png";
import file from "../assets/imgs/icon_file.png";
import book from "../assets/imgs/icon_book.png";
export default {
  props: ["type",'size'],
  data() {
    return {
        imgUrl:{
            fold,
            file,
            book,
        }
    };
  },
  created() {
    console.log(this.type); ///fold
  },
};
</script>
<style scoped>
.large{
    width: 7rem;
}
</style>