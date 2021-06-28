<script>
   export let user, message, date
   import moment from 'moment'
   import 'moment/locale/es'
   moment.locale('es')
</script>

<div class="matrix--box message--box entry">
   <div class="metadates">
      <h3 class="user">{user}</h3>
      <time class="date">{moment(date).fromNow(false)}</time>
   </div>
   <p class="message">{message}</p>
</div>

<style type="text/scss">
   .message--box {
      padding: 0.5rem;
      color: #bebebe;
      margin-bottom: 1.5rem;
   }
   .entry {
      width: fit-content;
   }
   .user {
      color: #04a5a5;
   }
   .message {
      padding: 0.25rem 0;
   }
   .metadates {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .date {
      font-size: 0.8rem;
      opacity: 0.8;
      padding-left: 0.5rem;
   }
</style>
