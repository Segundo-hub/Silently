<script>
   import Logo from '../custom/logo.svelte'
   import { authContext } from '../services/auth'
   import FriendCartoon from './FriendCartoon.svelte'

   export let data = {}
   let active = true
   let tabOptions = []
   const activeMenu = () => {
      active = !active
   }

   const openOptions = (e, index) => {
      if (index == 0) {
         tabOptions[index]
      }
   }

   const logoutUser = () => {
      authContext.logoutUser()
      localStorage.clear()
   }

   const handleTravel = (e) => {
      console.log(e.detail)
   }
</script>

<header class="main-header">
   <nav class="menu menu--top l-center">
      <div class="user--section">
         <span class="menu__logo"><Logo /></span>
         <span class="username">{data.user}</span>
         <button class="close btn" on:click={logoutUser}>FORGET THE TRAIN</button>
      </div>
      <button class="menu--toggle" on:click={activeMenu}>MENU</button>
   </nav>

   <!-- nonde -->

   <aside class="menu menu--left dt-l-r" class:is-active={active}>
      <div class="user--aside">
         <section class="user__actions">
            <div class="tab__labels">
               <button role="button" on:click={(e) => openOptions(e, 0)}>OPTIONS</button>
               <button role="button" class="active" on:click={(e) => openOptions(e, 1)}>TRAVELLERS</button>
            </div>
            <div class="tab--options">
               <FriendCartoon on:travel={handleTravel} />
            </div>
         </section>
      </div>
   </aside>
</header>

<style type="text/scss">
   .menu__logo {
      width: 2.5rem;
      padding: 0 1.5rem;
      font-weight: 600;
      color: teal;
   }
   .user--section {
      display: flex;
      width: calc(var(--menu-left-width) + 50px);
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
   }
   .username {
      color: #c0c0c0;
   }
   .close {
      background-color: #bd402a44;
      border-color: #c4290d9f;
      color: teal;
      font-weight: 600;
      &:hover {
         background-color: rgba(207, 84, 46, 0.89);
         color: white;
      }
   }
   .menu--toggle {
      position: absolute;
      right: 20px;
      line-height: 60px;
      color: silver;
   }
   .tab__labels {
      display: flex;
      height: 40px;
      background-color: #00000029;
      & > * {
         flex-grow: 1;
         line-height: 40px;
         text-align: center;
         &.active {
            background-color: rgb(0, 100, 100);
         }
      }
   }
   .tab--options {
      padding: 1rem;
   }
</style>
