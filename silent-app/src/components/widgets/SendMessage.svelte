<script>
   import { sendMessages } from './../../services'
   let message
   const handleSubmit = async () => {
      const data = await sendMessages({ message, title: 'Alex Segundo' })
      console.log(data)
   }
</script>

<div class="message--input">
   <form class="message-box" action="#" on:submit|preventDefault={handleSubmit}>
      <input class="input" type="text" bind:value={message} placeholder="Write your message " />
      <button type="submit" id="send-message" hidden />
      <label for="send-message">
         <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
               d="M18.426 8.095L1.42599 0.0950001C1.07599 -0.0679999 0.662992 -0.017 0.364992 0.228C0.0659916 0.473 -0.0630085 0.868 0.0299915 1.242L1.96899 9L0.0299915 16.758C-0.0640085 17.132 0.0659916 17.528 0.364992 17.773C0.547992 17.923 0.771992 18 0.999992 18C1.14499 18 1.28999 17.969 1.42599 17.905L18.426 9.905C18.776 9.74 19 9.388 19 9C19 8.612 18.776 8.26 18.426 8.095ZM2.48099 15.197L3.31999 11.84L8.99999 9L3.31999 6.16L2.48099 2.803L15.651 9L2.48099 15.197Z"
               fill="#9db5bd"
            />
         </svg>
      </label>
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
   .message-box {
      padding: 0.75rem 1rem;
      border-radius: 3px;
      border: 2px solid var(--dt-matrix-alt);
      background-color: var(--bg-primary-matrix);
      display: flex;
      align-items: center;
      label {
         margin-left: auto;
         cursor: pointer;
      }
   }
   .input {
      background-color: transparent;
      width: 90%;
      height: 100%;
      color: #03b1dd;
   }
</style>
