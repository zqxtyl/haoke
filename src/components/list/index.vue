<template>
  <div>
    <van-card
      :price="item.price"
      :desc="item.desc"
      :thumb="`${base}${item.houseImg}`"
      :title="item.title"
      @click="add"
    >
      <template #tags>
        <van-tag plain type="danger">{{ item.tags[0] }}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    item: {
      type: Object,
      require: true,
    },
    id: String,
  },
  data() {
    return {
      base: 'http://liufusong.top:8080',
    };
  },
  methods: {
    add(){
      this.$emit('getAll',this.id)
    }
  },
};
</script>

<style></style>
