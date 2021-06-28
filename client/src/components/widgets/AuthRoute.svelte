<script>
   import { Route } from 'svelte-routing'
   export let path
   import { authContext } from '../../services/auth'
</script>

{#if $authContext}
   <Route {path}><slot /></Route>
{/if}

<style type="text/scss">
</style>
