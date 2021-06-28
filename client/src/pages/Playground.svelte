<script>
   import { onMount } from 'svelte'
   import AuthMenu from '../components/AuthMenu.svelte'
   import MessageSection from '../components/layout/MessageSection.svelte'
   import { io } from 'socket.io-client'
   import { messages } from '../store'
   let user = '@marty'
   let root
   onMount(async () => {
      const socket = io('localhost:8080')
      socket.on('message', (data) => {
         console.log(data)
      })
      root.parentNode.className = 'playground main-home'
   })
</script>

<svelte:head>
   <title>Welcome {user}</title>
</svelte:head>
<AuthMenu data={{ user }} />
<main bind:this={root} class="main-content">
   <MessageSection />
</main>

<style type="text/scss">
   .main-content {
      position: relative;
      margin-left: var(--menu-left-width);
      max-height: calc(100vh - 60px);
      overflow-x: auto;
   }
</style>
