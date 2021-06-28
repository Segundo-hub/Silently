<script>
   import { sendMessages } from './../../services'
   let message
   const handleSubmit = async () => {
      const data = await sendMessages({ message, title: 'Alex Segundo' })
      console.log(data)
   }
</script>

<div class="message--input">
   <form class="matrix--box" action="#" on:submit|preventDefault={handleSubmit}>
      <input class="input" type="text" bind:value={message} placeholder="Writte your message" />
      <button type="submit" />
   </form>
</div>

<style type="text/scss">
   .message--input {
      background-color: #1b1b1b;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 5;
      left: var(--menu-left-width);
   }
   .input {
      background-color: transparent;
      width: 80%;
      height: 100%;
   }
</style>
