<script>
   import { authContext } from '../services/auth'

   export let data = {}
   let active = true
   let tabOptions = []
   const activeMenu = () => {
      active = !active
   }

   const openOptions = (e, index) => {
      console.log(e, tabOptions)
   }

   const logoutUser = () => {
      authContext.logoutUser()
      localStorage.clear()
   }
</script>

<header class="main-header">
   <nav class="menu menu--top">
      <span class="menu__logo">PRIVATE</span>
      <span class="user--section">
         {data.user}
         <span class="close" on:click={logoutUser}> Logout </span>
      </span>
      <button class="menu--toggle" on:click={activeMenu}>MENU</button>
   </nav>
   <!-- nonde -->
   <nav class="menu menu--left dt-l-r" class:is-active={active}>
      <div class="user--section">
         <section class="user--constants">
            <p>Hola</p>
         </section>
         <section class="user__actions">
            <div class="tab__labels">
               <span role="button" on:click={(e) => openOptions(e, 1)}>OPTIONS</span>
               <span role="button" class="active">FRIENDS</span>
            </div>
            <div class="tab--options">
               <div bind:this={tabOptions[0]} class="tab options active">Hola Amigos</div>
               <div bind:this={tabOptions[1]} class="tab friends">Hola Muvjahos</div>
            </div>
         </section>
      </div>
   </nav>
</header>

<style type="text/scss">
   .menu__logo {
      line-height: 60px;
      padding: 0 1.5rem;
      font-weight: 600;
      color: teal;
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
      background-color: rgba(0, 0, 0, 0.25);
      & > * {
         flex-grow: 1;
         line-height: 40px;
         text-align: center;
         &.active {
            background-color: rgb(0, 100, 100);
         }
      }
   }
   .tab {
      padding: 1rem;
      position: relative;
      display: none;
      &.active {
         display: block;
         animation: anim-bottom 0.4s;
      }
   }
</style>
