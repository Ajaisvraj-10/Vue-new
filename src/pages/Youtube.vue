<template>
  <div class="video-page">
    <Header />
    <div class="sidebar-container"><Sidebar /></div>
    <div class="container1">
      <div v-for="(video, index) in videos" :key="index" class="video-holder">
        <router-link :to="{ name: 'youtubedtl', params:  { index: index.toString() }}">
          <img class="thumbnail" :src="video.thumbnail" :alt="video.title" /><br /><br />
          <div class="title">
            <h2 class="thumbnail-heading">{{ video.title }}</h2>
          </div>
          <div class="chnl-logo">
            <img class="channel" :src="video.channel" alt="logo" />
          </div>
          <div class="p-tags1">   
            <p class="views">{{ video.views }}</p>
          </div>
          <div class="p-tags2">
            <p class="name">{{ video.name }}</p>  
          </div>
        </router-link>
      </div>
    </div>  
  </div>
</template>
  
  <script>
  import Header from "../pages/Header.vue";
  import Sidebar from "../pages/Sidebar.vue";
  
  export default {
    components: {
      Header,
      Sidebar,
    },
    data() {
      return {
        videos: [
          {
            id: 'video1',
            title: ' Avatar: The Way of Water | Official Tr...',
            thumbnail: '/youtube/avatar-thumbnail.jpg',
            channel:'/youtube/channel1.jpg',
            views:'59M views • 1 years ago',
            name:'Avatar'
          },
          {
            id: 'video2',
            title: 'The WOLVERINE Trailer (2013-Movie)',
            thumbnail: '/youtube/wolverine-thumbnail.jpg',
            channel:'/youtube/channel2.jpg',
            views:'75M views • 6 years ago',
            name:'KinoCheck',
          },
          {
            id: 'video3',
            title: 'The BATMAN - Main Trailer(2023 -Movie) ',
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
            title: 'JUSTICE LEAGUE 2 | First Trailer | Movie ',
            thumbnail: '/youtube/justice_league-thumbnail.jpg',
            channel:'/youtube/channel3.jpg',
            views:'105M views • 5 years ago',
            name:'WarnerBros'
          },
          {
            id: 'video6',
            title: 'Transformers: Rise of the Beasts | Official Trailer ',
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
            name:'BBC',
          },
          {
            id: 'video1',
            title: ' Avatar: The Way of Water | Official Tr...',
            thumbnail: '/youtube/avatar-thumbnail.jpg',
            channel:'/youtube/channel1.jpg',
            views:'59M views • 1 years ago',
            name:'Avatar'
          },
          {
            id: 'video2',
            title: 'The WOLVERINE Trailer (2013-Movie)',
            thumbnail: '/youtube/wolverine-thumbnail.jpg',
            channel:'/youtube/channel2.jpg',
            views:'75M views • 6 years ago',
            name:'KinoCheck',
          },
          {
            id: 'video3',
            title: 'The BATMAN - Main Trailer(2023 -Movie) ',
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
            title: 'JUSTICE LEAGUE 2 | First Trailer | Movie ',
            thumbnail: '/youtube/justice_league-thumbnail.jpg',
            channel:'/youtube/channel3.jpg',
            views:'105M views • 5 years ago',
            name:'WarnerBros'
          },
          {
            id: 'video6',
            title: 'Transformers: Rise of the Beasts | Official Trailer ',
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
            name:'BBC',
          },
          
          
        ],
      };
    },
  };
  </script>
  
  <style scoped>
@import "./styles/youtubestyle.css";
@import "./styles/headerstyle.css";
@import "./styles/sidebarstyle.css"; 
@import "./styles/global.css";

  </style>
  