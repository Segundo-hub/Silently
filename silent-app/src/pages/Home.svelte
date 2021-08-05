<script>
   import { navigate } from 'svelte-routing'
   import { getUserAccount, setUserAccount } from '../services/auth'
   import AuthForm from './../components/WgAuthForm.svelte'

   const handleLoggin = async ({ detail }) => {
      const { username, password } = detail
      const { status } = await getUserAccount({ username, password })
      status && navigate('/live')
   }
</script>

<main class="main-home">
   <div class="container is__full__size abs-center--items">
      <AuthForm on:send={handleLoggin} />
   </div>
</main>

<style type="text/scss">
</style>
