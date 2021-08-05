<script>
   import { createEventDispatcher } from 'svelte'
   const dispatch = createEventDispatcher()
   let username
   const messages = [
      {
         username: '@Matrix67',
         newMessage: 'Este es mi mensaje',
         time: '20:40',
      },
      {
         username: '@Ortus56',
         newMessage: 'Esto es uno de mi nuevo',
         time: '20:40',
      },
      {
         username: '@Jonas36',
         newMessage: 'This my main',
         time: '20:40',
      },
   ]

   const handleClick = (e) => {
      dispatch('travel', {
         username,
         newMessage,
         time,
      })
   }
</script>

<div>
   {#each messages as ms}
      <div class="friend-section" on:click={handleClick}>
         <span>{ms.username}</span>
         <p>{ms.newMessage}</p>
         <time>{ms.time}</time>
      </div>
   {/each}
</div>

<style type="text/scss">
   .friend-section {
      color: #89a09e;
      border-bottom: thin solid var(--dt-matrix-alt);
   }
</style>
