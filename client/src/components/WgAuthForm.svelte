<script>
   import { navigate } from 'svelte-routing'

   import Link from 'svelte-routing/src/Link.svelte'
   import Logo from '../custom/logo.svelte'
   let username, password
   export let isAuth = true
   import { getUserAccount, authContext } from './../services/auth/'

   const formSubmit = async () => {
      const { status } = await getUserAccount({ username, password })
      authContext.userLogin(status)
      status && navigate('/live')
   }
</script>

<div class="form-container dt">
   <div class="logo-contain">
      <Logo />
   </div>
   <form action="#" on:submit|preventDefault={formSubmit} class="formControl" autocomplete="off">
      <label for="username" class="form__label">
         <h3 class="label__title">Username</h3>
         <input class="form__input dt dt-2-matrix" type="text" id="username" bind:value={username} />
      </label>
      {#if isAuth}
         <span />
      {:else}
         <label for="user_mail" class="form__label">
            <h3 class="label__title">Usermail</h3>
            <input class="form__input dt dt-2-matrix" type="text" id="user_mail" autocomplete="off" />
         </label>
      {/if}

      <label for="password" class="form__label">
         <h3 class="label__title">Password</h3>
         <input class="form__input dt dt-2-matrix" type="password" id="password" autocomplete="new-password" bind:value={password} />
      </label>
      {#if isAuth}
         <span class="ctx-caption"> LOGIN </span>
         <div class="form--footer">
            <span>Without Acount</span>
            <Link to="/register" class="link">REGISTER</Link>
         </div>
      {:else}
         <span class="ctx-caption"> REGISTER </span>
         <div class="form--footer">
            <span>With Acount</span>
            <Link to="/" class="link">LOGIN</Link>
         </div>
      {/if}
      <button />
   </form>
   <!--     -->
</div>

<style type="text/scss">
   .form-container {
      color: var(--txt-primary-matrix);
      position: relative;
      margin: auto;
      width: 100%;
      background-color: var(--bg-primary-matrix);
      @media screen and(min-width: 1000px) {
         width: 50%;
         padding: 1.25rem;
      }
   }
   .formControl {
      width: 85%;
      margin: auto;
   }
   .form__label {
      padding: 0.5rem;
   }
   .label__title {
      padding: 0.35rem;
   }
   .form__input {
      padding: 0.5rem;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.233);
   }
   .logo-contain {
      text-align: center;
      height: 100px;
   }
   .ctx-caption {
      position: absolute;
      right: 1rem;
      top: 1rem;
      background-color: rgba(0, 0, 0, 0.322);
      padding: 0.25rem 0.5rem;
   }
   .form--footer {
      text-align: center;
      padding: 1rem 0;
   }
</style>
