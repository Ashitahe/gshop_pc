<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p v-if="userInfo.name">
            <span>{{ userInfo.nickName }}</span>
            <a href="javascript:;" @click="logout" style="margin-left: 15px"
              >退出</a
            >
          </p>
          <p v-else>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center" >我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="尚品汇" to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model.trim="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click.prevent="search"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      keyword: "",
    };
  },
  components: {},
  mounted() {
    this.$bus.$on("clearKeyword", () => {
      this.keyword = "";
    });
  },
  methods: {
    search() {
      // 编程式路由跳转
      // 用字符串拼接params参数携带keyword给search页面
      // this.$router.push(`/search/${this.keyword}`)
      // 用对象携带params参数
      const location = {
        name: "search", // 路由条目的name
        query: this.$route.query,
      };
      if (this.keyword) {
        // 只有有数据时才携带params参数
        location.params = { keyword: this.keyword };
      }
      this.$router.push(location);
    },
    logout() {
      if (confirm("确定退出登录？")) {
        this.$store
          .dispatch("logout")
          .then((result) => {
            this.$router.push("/login");
          })
          .catch((err) => {
            alert("退出登录失败");
            console.log(err);
          });
      }
    },
  },
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
