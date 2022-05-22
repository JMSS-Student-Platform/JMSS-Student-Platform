<script>
    import { Router, Route } from 'svelte-routing';
    import faq from '../components/faq.svelte';
    import post from '../components/post.svelte';
    import index from '../components/index.svelte';
  
    export let url = '';
  </script>
  
  <Router {url}>
    <div>
      <Route path="/faq" component={faq} />
      <Route path="/post" component={post} />
      <Route path="/" component={index} />
    </div>
  </Router>