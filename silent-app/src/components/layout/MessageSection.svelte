<script>
   //import { messages } from '../../store'
   import Message from '../widgets/Message.svelte'
   import SendMessage from '../widgets/SendMessage.svelte'

   const messages = [
      {
         owner: 'Alex Junior',
         message: 'Hola Mundo',
         date: Date.now,
      },
      {
         owner: 'Alex Junior',
         message: 'Hola Mundo',
         date: Date.now,
      },
      {
         owner: 'Alex Junior',
         message: 'Hola Mundo',
         date: Date.now,
      },
      {
         owner: 'Alex Junior',
         message: 'Hola Mundo',
         date: Date.now,
      },
      {
         owner: 'Alex Junior',
         message: 'Hola Mundo',
         date: Date.now,
      },
      {
         owner: 'Alex Junior',
         message: 'Hola Mundo',
         date: Date.now,
      },
      {
         owner: 'Alex Junior',
         message: 'Hola Mundo',
         date: Date.now,
      },
      {
         owner: 'Alex Junior',
         message: 'Hola Mundo',
         date: Date.now,
      },
      {
         owner: 'Alex Junior',
         message: 'Hola Mundo',
         date: Date.now,
      },
      {
         owner: 'Alex Junior',
         message: 'Hola Mundo',
         date: Date.now,
      },
      {
         owner: 'Alex Junior',
         message: 'Hola Mundo',
         date: Date.now,
      },
      {
         owner: 'Hola Alex Junior',
         message: 'Hola Mundo',
         date: Date.now,
      },
   ]
</script>

<div class="message--section">
   {#each messages as msg}
      <Message user={msg.owner} message={msg.message} date={msg.date} />
   {/each}
   <SendMessage />
</div>

<style type="text/scss">
   .message--section {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      margin-bottom: 70px;
   }
</style>
