<template>
  <div>
    <div class="m-topbar">
        <div class="topfix">
            <h1 class="topfl">
              <span class="toptit">XX云音乐</span>
            </h1>
            <div class="topfr">
              <span class="topbton">下载APP</span>
            </div>
        </div>
    </div>
    <div class="m-tabarea">
        <ul class="u-tab">
          <li class="tabtit" @click="changTab(1)" >
            <div class="tabtxt" :class="{active:1==currentIndex}">推荐音乐</div>
          </li>
          <li class="tabtit" @click="changTab(2)">
            <div class='tabtxt' :class="{active:2==currentIndex}">热歌榜</div>
          </li>
          <li class="tabtit" @click="changTab(3)">
            <div class='tabtxt' :class="{active:3==currentIndex}">搜索</div>
          </li>
        </ul>
        <div class="m-tabct" v-if="currentIndex==1">
          <div class="tabctitem">
            <div class="m-homeremd">
              <h2 class="remd-tl">推荐歌单</h2>
              <div class="remd-songs">
                <div class="clearfloat">
                    <a class="remd-li">
                      <div class="remd-img">
                        <img class="img" src="http://p2.music.126.net/ZWHQ7tuNpuuW6NMs1Tv2cQ==/109951164595899195.jpg?imageView=1&type=webp&thumbnail=369x0">
                      </div>
                      <p class="remd-text">慵懒小调 | 当阳光暖洋洋的洒在草地上</p>
                    </a>
                    <a class="remd-li">
                      <div class="remd-img">
                        <img class="img" src="http://p2.music.126.net/Y-RQorqSRubILlxs_w-xcw==/109951164267254902.jpg?imageView=1&type=webp&thumbnail=369x0">
                      </div>
                      <p class="remd-text">直道相思了无益，未妨惆怅是清狂</p>
                    </a>
                    <a class="remd-li">
                      <div class="remd-img">
                        <img class="img" src="http://p2.music.126.net/zGzNJcfLZfLW7E0bkI0opg==/109951163815887214.jpg?imageView=1&type=webp&thumbnail=369x0">
                      </div>
                      <p class="remd-text">精选 | 网络热歌分享</p>
                    </a>
                    <a class="remd-li">
                      <div class="remd-img">
                        <img class="img" src="http://p2.music.126.net/2MsstS-M9w5-li0aRy3sUQ==/1380986606815861.jpg?imageView=1&type=webp&thumbnail=369x0">
                      </div>
                      <p class="remd-text">【旋律控】超级好听的欧美良曲</p>
                    </a>
                    <a class="remd-li">
                      <div class="remd-img">
                        <img class="img" src="http://p2.music.126.net/p8UsKXA-qjfYuicFEZ_bbw==/109951163822176249.jpg?imageView=1&type=webp&thumbnail=369x0">
                      </div>
                      <p class="remd-text">100首好听的翻唱</p>
                    </a>
                    <a class="remd-li">
                      <div class="remd-img">
                        <img class="img" src="http://p2.music.126.net/yF68-DhSzUeMHK9Io4eRPA==/109951164496413305.jpg?imageView=1&type=webp&thumbnail=369x0">
                      </div>
                      <p class="remd-text">穿越千万时间线，只想见你</p>
                    </a>
                    
                    
                </div>
              </div>
              <h2 class="remd-tl">最新音乐</h2>
              <div class="remd-news">
                <div class="remd-sglst">
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            生命之河
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 王菲/那英 - 生命之河
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a><a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            NAMANANA (Remix)
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            张艺兴 -NAMANANA (Remix)
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a><a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            给妈咪
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i>
                             王一博 - 给妈咪
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a><a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            彝人的狂欢
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            MICO刘为（JungleMico Project）- E能量「立」
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a><a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                           悬日
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            田馥甄 - 悬日
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            颠倒的梦
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            Far East Movement / 摩登兄弟刘宇宁
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            两个普普通通小青年
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            李荣浩 / 刘柏辛Lexie / 摩登兄弟刘宇宁
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            姜子牙电影(《姜子牙》主题曲)
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            张杰 - 姜子牙
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            颠倒的梦
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            Far East Movement / 摩登兄弟刘宇宁
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            If I Can
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            Lil Ghost小鬼 / 摩登兄弟刘宇宁
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                   <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            Yummy
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                           Justin Bieber
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>    
        <div class="m-tabct" v-if="currentIndex==2">
          <div class="tabctitem">
            <div class="m-homeremdhot">
              <div class="hottop">
                <div class="hotopct">
                  <div class="hmsprt hmspicon"></div>
                  <div class="hottime">更新日期：01月23日</div>
                </div>
              </div>
              <div class="remd-news">
                <div class="remd-sglst">
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            大眠 (完整版)(原唱：王心凌)
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            小乐哥 - 大眠 (完整版)
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a><a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                           你的答案
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            阿冗 - 你的答案
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a><a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            世间美好与你环环相扣
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i>
                             柏松 - 听闻余生
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a><a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            这就是爱吗(原唱：容祖儿)
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            十豆彡 - 这就是爱吗
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a><a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                          飞(风浪没平息)
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            王恩信Est / 二胖u - 飞
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            句号
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            G.E.M.邓紫棋 - 摩天动物园
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                           麻雀
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            李荣浩 - 麻雀
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                           冬眠
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            司南 - 冬眠
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            勇气
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            棉子 - 勇气
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            最甜情歌（女生版）
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            一玟 - 最甜情歌（女生版）
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            下山
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                           要不要买菜 - 下山
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                   <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            还是分开
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            张叶蕾 - 还是分开
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                  <a class="remd-sglstitem">
                      <div class="sgfr">
                        <div class="remd-fl">
                          <span class="remd-singcom remd-singtit">
                            我要找到你
                          </span>
                          <span class="remd-singcom remd-singinfo">
                            <i class="remd-chpy remd-hmsprt1"></i> 
                            zic子晨 - 我要找到你
                          </span>
                        </div>
                        <div class="remd-fr">
                            <span class="remd-chply remd-hmsprt"></span>
                        </div>
                      </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-tabct" v-if="currentIndex==3">
          <div class="tabctitem">
            <div class="m-homeremdsearch">
              <from class="m-input">
                <div class="inputcover">
                  <i class="m-inputsrch m-input-icon"></i>
                  <input class="search"></input>
                  <label class="holder">搜索歌曲、歌手、专辑</label>
                </div>
              </from>
              <div class="m-default">
                <section class="m-hotlist">
                  <h3 class="title">热门搜索</h3>
                  <ul class="list">
                    <li class="item">
                      <a>云村群星大拜年</a>
                    </li>
                    <li class="item">
                    <a>生命之河</a>
                    </li>
                    <li class="item">
                    <a>新春扭蛋机</a>
                    </li>
                    <li class="item">
                    <a>姆爷新专辑
                    </a></li>
                    <li class="item">
                    <a>Last Dance
                    </a></li>
                    <li class="item">
                    <a>防弹少年团新歌</a>
                    </li>
                    <li class="item">
                    <a>王一博新歌</a>
                    </li>
                    <li class="item">
                    <a>周深听我说</a>
                    </li>
                    <li class="item">
                    <a>田馥甄新歌</a>
                    </li>
                    <li class="item">
                    <a>颠倒的梦</a>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
const uri = 'https://music.163.com/weapi/activity/downloadpage/config/get'
export default {
  data () {
    return {
      currentIndex: 1
    }
  },

  components: {
    card
  },
  onLoad () {
    
  },
  methods: {
    changTab(index){
      this.currentIndex = index
    }
    ,
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },
  mounted () {
    this.$http
    .get(uri)
    .then((d)=>{
      console.log(d)
    })
    .catch(err=>{
      console.log(err.status,err.message)
    })
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
    @import url("./index.css");
</style>
