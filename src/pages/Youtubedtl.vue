<template>
  <div class="video-detail">
    <Header />
    <div class="video-details">
      <img class="vid" :src="video.thumbnail" :alt="video.title" />
    </div>
    <div>
      <h2 class="title-detail">{{ video.title }}</h2>
    </div>
    <div>
      <img class="channel-detail" :src="video.channel" alt="logo" />
    </div>
    <div>
      <h3 class="name-detail">{{ video.name }}</h3>
    </div>
    <div>
      <h6 class="subscribers">1.42M subscribers</h6>
    </div>
    <div class="subs-div">
      <button class="subs-btn">Subscribe</button>
    </div>
    <div class="like-div">
      <img class="like-details" src="/youtube/like-back.png" alt="" />
      <img class="dislike-details" src="/youtube/dislike.png" alt="" />
      <div class="line">|</div>
    </div>
    <div class="share-div">
      <img class="share-details" src="/youtube/share.png" alt="" />
    </div>
    <div class="share">Share</div>
    <div class="download-div">
      <img class="download-details" src="/youtube/download.png" alt="" />
      <div class="download">Download</div>
    </div>
    <div class="more">
      <div class="dots">•••</div>
    </div><br>
    <tr  style="color: antiquewhite;" />
    <div class="side-vdo">
    <div class="container3">
      <div v-for="(recommendedVideo, index) in recommendedVideos" :key="index" class="recomm-item">
        <img class="recomm" :src="recommendedVideo.thumbnail" alt="" />
        <div>
          <h5 class="bbc">{{ recommendedVideo.title }}</h5>
        </div>
        <div>
          <h6 class="chnl">{{ recommendedVideo.name }}</h6>
        </div>
        <div>
          <h6 class="view-dtl">{{ recommendedVideo.views }}</h6>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
  

  <script >
  
  import Header from "../pages/Header.vue";

export default {
  components: {
      Header,
  },
  data() {
    return {
      video: null,
      videos: [
          {
            id: 'video1',
            title: ' Avatar: The Way of Water | Official Trailer',
            thumbnail: '/youtube/avatar-thumbnail.jpg',
            channel:'/youtube/channel1.jpg',
            views:'59M views • 1 year ago',
            name:'Avatar'
          },
          {
            id: 'video2',
            title: 'The WOLVERINE Trailer (2013)',
            thumbnail: '/youtube/wolverine-thumbnail.jpg',
            channel:'/youtube/channel2.jpg',
            views:'75M views • 6 year ago',
            name:'KinoCheck',
          },
          {
            id: 'video3',
            title: 'The BATMAN - Main Trailer(2023)',
            thumbnail: '/youtube/batman-thumbnail.png',
            channel:'/youtube/channel3.jpg',
            views:'75M views • 5 months ago',
            name:'WarnerBros',
          },
          {
            id: 'video4',
            title: 'EXTRACTION 2 | Official Trailer | Netflix',
            thumbnail: '/youtube/extraction2-thumbnail.jpg',
            channel:'/youtube/channel4.jpg',
            views:'55M views • 3 months ago',
            name:'Netflix',
          },
          {
            id: 'video5',
            title: 'JUSTICE LEAGUE 2 | First Trailer ',
            thumbnail: '/youtube/justice_league-thumbnail.jpg',
            channel:'/youtube/channel3.jpg',
            views:'105M views • 5 years ago',
            name:'WarnerBros'
          },
          {
            id: 'video6',
            title: 'Transformers: Rise of the Beasts | Official Trailer (2023 Movie)',
            thumbnail: '/youtube/transformers-thumbnail.jpg',
            channel:'/youtube/channel5.jpg',
            views:'105M views • 5 months ago',
            name:'Paramount'
          },
          {
            id: 'video7',
            title: 'Thiruvonam | Karikku | Comedy | Karikku',
            thumbnail: '/youtube/karikku-thumbnail.jpg',
            channel:'/youtube/channel6.jpg',
            views:'39M views • 3 years ago',
            name:'Karikku'
          },
          {
            id: 'video8',
            title: '10 TOP Natural History Moments | BBC Earth',
            thumbnail: '/youtube/BBC-thumbnail.jpg',
            channel:'/youtube/channel7.jpg',
            views:'50M views • 5 years ago',
            name:'BBC'
          }, 
        ],
      recommendedVideos: [
      {
      thumbnail: '/youtube/BBC-thumbnail.jpg',
      title: '10 TOP Natural History Moments | BBC Earth',
      views:'50M views • 5 years ago',
      name:'BBC'
      },
      {
      thumbnail: '/youtube/karikku-thumbnail.jpg',
      title: 'Thiruvonam | Karikku | Comedy | Karikku',
      views:'39M views • 3 years ago',
      name:'Karikku'
      },
      {
      thumbnail: '/youtube/transformers-thumbnail.jpg',
      title: 'Transformers: Rise of the Beasts | Official Trailer (2023 Movie)',
      views:'105M views • 5 months ago',
      name:'Paramount'
      },
      {
      thumbnail: '/youtube/justice_league-thumbnail.jpg',
      title: 'JUSTICE LEAGUE 2 | First Trailer | Netflix',
      views:'105M views • 5 years ago',
      name:'WarnerBros'
      },
      {
      thumbnail: '/youtube/extraction2-thumbnail.jpg',
      title: 'EXTRACTION 2 | Official Trailer | Netflix',
      views:'55M views • 3 months ago',
      name:'Netflix',
     }, 
     {
      thumbnail: '/youtube/BBC-thumbnail.jpg',
      title: '10 TOP Natural History Moments | BBC Earth',
      views:'50M views • 5 years ago',
      name:'BBC'
      },
      {
      thumbnail: '/youtube/karikku-thumbnail.jpg',
      title: 'Thiruvonam | Karikku | Comedy | Karikku',
      views:'39M views • 3 years ago',
      name:'Karikku'
      },
      {
      thumbnail: '/youtube/transformers-thumbnail.jpg',
      title: 'Transformers: Rise of the Beasts | Official Trailer (2023 Movie)',
      views:'105M views • 5 months ago',
      name:'Paramount'
      },
      {
      thumbnail: '/youtube/justice_league-thumbnail.jpg',
      title: 'JUSTICE LEAGUE 2 | First Trailer | Netflix',
      views:'105M views • 5 years ago',
      name:'WarnerBros'
      },

      ],
    };
  },

  created() {
    const index = this.$route.params.index;
    if (index >= 0 && index < this.videos.length) {
      this.video = this.videos[index];
    } else {
      console.error(`Invalid index: ${index}`);
    }
  },
      
    };
  
  </script>
  
  <style scoped>
 @import "./styles/youtubedtlstyle.css";
 @import "./styles/headerstyle.css";
 @import "./styles/global.css"

  </style>
  