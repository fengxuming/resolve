<template>
  <div class="bangumi-stats">
    <div class="info-bangumi">
      <div class="title">番剧主要播放数据</div>
      <div class="charts-list">
        <div class="charts-panel">
          <div class="charts-title">播放量</div>
          <ve-pie
            ref="chart1"
            :settings="chartSettings"
            width="800px"
            height="500px"
            :data="chartDataPie1"
          ></ve-pie>
        </div>
        <div class="charts-panel">
          <div class="charts-title">弹幕数</div>
          <ve-pie
            ref="chart1"
            :settings="chartSettings"
            width="800px"
            height="500px"
            :data="chartDataPie2"
          ></ve-pie>
        </div>
      </div>
      <div class="charts-list">
        <div class="charts-panel">
          <div class="charts-title">评论数</div>
          <ve-pie
            ref="chart1"
            :settings="chartSettings"
            width="800px"
            height="500px"
            :data="chartDataPie3"
          ></ve-pie>
        </div>
        <div class="charts-panel">
          <div class="charts-title">收藏数</div>
          <ve-pie
            ref="chart1"
            :settings="chartSettings"
            width="800px"
            height="500px"
            :data="chartDataPie4"
          ></ve-pie>
        </div>
      </div>

      <div class="charts-list">
        <div class="charts-panel">
          <div class="charts-title">硬币数</div>
          <ve-pie
            ref="chart1"
            :settings="chartSettings"
            width="800px"
            height="500px"
            :data="chartDataPie5"
          ></ve-pie>
        </div>
        <div class="charts-panel">
          <div class="charts-title">分享数</div>
          <ve-pie
            ref="chart1"
            :settings="chartSettings"
            width="800px"
            height="500px"
            :data="chartDataPie6"
          ></ve-pie>
        </div>
      </div>
      <div class="charts-list">
        <div class="charts-panel">
          <div class="charts-title">点赞数</div>
          <ve-pie
            ref="chart1"
            :settings="chartSettings"
            width="800px"
            height="500px"
            :data="chartDataPie7"
          ></ve-pie>
        </div>
      </div>
    </div>
    <div class="info-bangumi">
      <div class="title">番剧主要播放数据</div>
      <ve-radar :data="chartData2" height="1000px"  style="margin-top:30px"></ve-radar>
    </div>
    <div class="info-bangumi">
      <div class="title">热度</div>
      <ve-histogram :data="chartData3"  height="1000px":data-zoom="dataZoom" style="margin-top:30px"></ve-histogram>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    this.dataZoom = [
      {
        type: "slider",
        show: true,
        xAxisIndex: [0],
        start: 0,
        end: 20 // 数值的设置参考http://echarts.baidu.com/option.html#dataZoom-slider.start
      }
    ];
    this.chartSettings = {
      radius: 90,
      offsetY: 300
    };
    return {
      style: {
        padding: "5px"
      },
      chartDataPie1: {
        columns: ["番剧", "播放"],
        rows: []
      },
      chartDataPie2: {
        columns: ["番剧", "弹幕"],
        rows: []
      },
      chartDataPie3: {
        columns: ["番剧", "评论"],
        rows: []
      },
      chartDataPie4: {
        columns: ["番剧", "收藏"],
        rows: []
      },
      chartDataPie5: {
        columns: ["番剧", "硬币"],
        rows: []
      },
      chartDataPie6: {
        columns: ["番剧", "分享"],
        rows: []
      },
      chartDataPie7: {
        columns: ["番剧", "点赞"],
        rows: []
      },
      chartData2: {
        columns: [
          "番剧名",
          "播放量",
          "弹幕数",
          "评论数",
          "收藏数",
          "硬币数",
          "分享数",
          "点赞数"
        ],
        rows: []
      },
      chartData3: {
        columns: ["番剧名", "热度"],
        rows: []
      },
      bangumiStatsList: []
    };
  },
  watch: {},
  mounted() {
    this.$http.get("bangumiStats/").then(response => {
      this.bangumiStatsList = response.body.datas;

      for (let index = 0; index < this.bangumiStatsList.length; index++) {
        let title = this.bangumiStatsList[index]._id.title[0];
        let view = this.bangumiStatsList[index].view;
        let danmaku = this.bangumiStatsList[index].danmaku;
        let reply = this.bangumiStatsList[index].reply;
        let favorite = this.bangumiStatsList[index].favorite;
        let coin = this.bangumiStatsList[index].coin;
        let share = this.bangumiStatsList[index].share;
        let like = this.bangumiStatsList[index].like;

        this.chartDataPie1.rows.push({
          番剧: title,
          播放: view
        });
        this.chartDataPie2.rows.push({
          番剧: title,
          弹幕: danmaku
        });
        this.chartDataPie3.rows.push({
          番剧: title,
          评论: reply
        });
        this.chartDataPie4.rows.push({
          番剧: title,
          收藏: favorite
        });
        this.chartDataPie5.rows.push({
          番剧: title,
          硬币: coin
        });
        this.chartDataPie6.rows.push({
          番剧: title,
          分享: share
        });
        this.chartDataPie7.rows.push({
          番剧: title,
          点赞: like
        });

        let obj2 = {
          番剧名: title,
          播放量: view,
          弹幕数: danmaku,
          评论数: reply,
          收藏数: favorite,
          硬币数: coin,
          分享数: share,
          点赞数: like
        };
        let obj3 = {
          番剧名: title,
          热度: view + danmaku + reply + favorite + coin + share + like
        };

        this.chartData2.rows.push(obj2);
        this.chartData3.rows.push(obj3);
      }
    });
  }
};
</script>
<style scoped>
.title {
  padding-left: 25px;
}
.charts-title {
  text-align: center;

  border-bottom: 1px solid #eee;

  margin-bottom: 7px;
}
.info-bangumi {
  background: #fff;
}
.el-card__header {
  padding: 0;
}
.info-bangumi .el-card__header {
  padding: 10px 15px;
}
.info-bangumi .el-card__body {
  padding: unset;
}
.charts-list {
  display: flex;
  margin-top: 25px;
  justify-content: center;
  min-width: 1416px;
}
.charts-panel {
  width: 800px;
  margin-left: 60px;

  /* padding: 25px; */
}
.charts-panel .ve-pie {
  /* transform: scale(0.7,0.7); */
}
</style>
