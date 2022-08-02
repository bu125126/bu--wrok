<template>
    <div>
        <span class="fan"><img src="../assets/logo.png" class="yes" @click="fan"></span>
        <div class="login">我的书架</div>
        <van-collapse v-model="activeNames">
            <van-collapse-item title="正在看" name="1">
                <ul>
                    <li v-for="item in shu" :key="item.id">
                        <div>
                            <span>{{ item.name }}</span>
                            <span class="bj">
                                <input type="checkbox" :value="item.checked" @click="bj(item.id)">
                                标记为已看完</span> |
                            <span class="del" @click="del(item.id)">删除图书</span>
                        </div>

                    </li>
                </ul>
            </van-collapse-item>
            <van-collapse-item title="已完结" name="2">

            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["shu"])
    },
    data() {
        return {
            activeNames: ['1'],
        };
    },

    mounted() {

    },

    methods: {
        fan() {
            this.$router.push('/about')
        },
        del(id) {
            this.$store.commit('del', id)
        },
        bj(id) {
            this.$store.commit('bj', id)
        }
    },
};
</script>

<style lang="scss" scoped>
.bj {
    color: red;
    margin-left: 30px;
}

.login {
    width: 100%;
    height: 50px;
    background-color: rgb(255, 34, 0);
    text-align: center;
    line-height: 50px;
    color: white;
    font-weight: 500;
}

.yes {
    width: 10px;
    height: 10px;
}

.fan {
    position: absolute;
    top: 17px;
    left: 5px;
}

.zai {
    width: 100%;
    height: 30px;
    background-color: rgb(255, 34, 0);
    line-height: 30px;
    color: white;
    font-weight: 500;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    span {
        margin-right: 20px;
    }
}
</style>