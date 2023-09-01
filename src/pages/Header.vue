<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
    <header class="header">
      <div class="logo"><img class="ytlogo" src="/youtube/youtube.jpg" alt=""></div>
      <div class="search">
        <input type="text" placeholder="Search" />
        <div class="search-btn"><img class="search" src="/youtube/search-interface-symbol.png" alt=""></div>
      </div>
      <div class="plan-div">
      <routerLink :to="{ name: 'plans'}">
        <button class="plan-btn"><h5 class="fnt-plan">Buy Plan</h5></button>
      </routerLink>
    </div>
    <div class="login-div">
      <routerLink :to="{name:'login2'}">
        <button class="login-btn"><h4 class="sign">Login</h4></button>
      </routerLink>
    </div>
    <div class="user-div" ><h4 class="user">A</h4></div>
    </header>
  </template>
  
  <style scoped>
@import "./styles/headerstyle.css";
@import "./styles/global.css";

  </style>
