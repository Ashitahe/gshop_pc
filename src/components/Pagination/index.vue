<template>
  <div class="pagination">
    <button
      :disabled="myCurrentPage === 1"
      :class="{ disable: myCurrentPage === 1 }"
      @click="setCurrentPage(myCurrentPage - 1)"
    >
      上一页
    </button>
    <button v-if="startEnd.start !== 1" @click="setCurrentPage(1)">1</button>
    <button class="disable" v-if="startEnd.start > 2">...</button>
    <button
      v-for="page in startArr"
      :key="page"
      :class="{ active: page === myCurrentPage }"
      @click="setCurrentPage(page)"
    >
      {{ page }}
    </button>
    <button class="disable" v-if="startEnd.end < totalPages - 1">...</button>
    <button
      v-if="startEnd.end < totalPages"
      @click="setCurrentPage(totalPages)"
    >
      {{ totalPages }}
    </button>
    <button
      :disabled="myCurrentPage === startEnd.end"
      :class="{ disable: myCurrentPage === startEnd.end }"
      @click="setCurrentPage(myCurrentPage + 1)"
    >
      下一页
    </button>
    <button disabled>共{{ total }}条</button>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: {
    currentNo: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 5,
    },

    total: {
      type: Number,
      default: 0,
    },
    showPageNo: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      myCurrentPage: this.currentNo,
      isShow: true,
    };
  },
  methods: {
    setCurrentPage(index) {
      if (index === this.myCurrentPage) return;
      this.myCurrentPage = index;
      this.$emit("setPageNo", this.myCurrentPage);
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    startEnd() {
      let start = this.myCurrentPage - Math.floor(this.showPageNo / 2);
      if (start < 1) {
        start = 1;
      }
      let end = start + this.showPageNo - 1;
      if (end > this.totalPages) {
        end = this.totalPages;

        // 修正start
        start = end - this.showPageNo + 1;
        if (start < 1) {
          start = 1;
        }
      }
      return {
        start,
        end,
      };
    },
    startArr() {
      const arr = [];
      const { start, end } = this.startEnd;
      for (let page = start; page <= end; page++) {
        arr.push(page);
      }
      return arr;
    },
  },
};
</script>

<style lang='less' scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &.active {
      background: blue;
      color: white;
      cursor: not-allowed;
    }

    &.disable {
      cursor: not-allowed;
      color: #ccc;
    }
  }
}
</style>