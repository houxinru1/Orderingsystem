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
</template>

<script>
export default {
    
}
</script>
<style scoped>
.box{
    border-radius: 10px;
    overflow: hidden;
}
.login{
      font-size:3rem;
        display:grid;
        grid-template-columns: repeat(5,1fr);
        height:100vh;
        background:#7367fb;
   
}
    .item:nth-of-type(odd){
        background:#7c71fe;
    }


</style>