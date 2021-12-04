<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainner></ListContainner>
        <TodayRecommend></TodayRecommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="floor in floors" :key="floor.id" :floor="floor"></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
import ListContainner from './ListContainner';
import TodayRecommend from './TodayRecommend';
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor';
import Brand from './Brand';
import {mapState} from 'vuex';

export default {
    name: 'home',
    components:{
        ListContainner,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    created(){
        this.$store.dispatch('getFloors');
    },
    computed:{
        ...mapState({
            floors: state => state.home.floors
        })
    }
}
</script>

<style lang="less" scoped>

</style>