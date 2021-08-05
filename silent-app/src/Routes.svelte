<script>
	import { Router, Route } from "svelte-routing"
	import AuthRoute from "./components/widgets/AuthRoute.svelte"
	import Home from "./pages/Home.svelte"
	import Playground from "./pages/Playground.svelte"
	import Register from "./pages/Register.svelte"
</script>

<Router basepath="/">
	<Route path="/" exact>
		<Home />
	</Route>
	<Route path="/register">
		<Register />
	</Route>
	<Route path="/live">
		<Playground />
	</Route>

	<Route path="*">Not Found</Route>
</Router>
