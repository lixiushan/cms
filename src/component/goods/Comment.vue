<template>
  <div>
      <Comment :CommentId="$route.params.id"></Comment>
  </div>
</template>

<script>
import Comment from '../common/Comment.vue';
export default {
    components:{Comment}
}
</script>

<style>

</style>
