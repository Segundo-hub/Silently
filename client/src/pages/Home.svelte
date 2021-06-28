<script>
   import WgAuthForm from './../components/WgAuthForm.svelte'
   let auth = true
</script>

<main class="main-home">
   <div class="container is__full__size abs-center--items">
      <WgAuthForm isAuth={auth} />
   </div>
</main>

<style type="text/scss">
</style>
