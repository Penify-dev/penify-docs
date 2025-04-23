import DefaultTheme from "vitepress/theme";
import "./style.css";
import ShareButtons from './ShareButtons.vue'
import Layout from './Layout.vue'
import EmailSignup from './EmailSignup.vue'
import Comments from './Comments.vue'
import Analytics from './Analytics.vue'

// Setup client-side only code
const clientSetup = () => {
  if (typeof window !== 'undefined') {
    // Register analytics on client-side only
    import('./analytics').then(analytics => {
      const { pageView } = analytics;
      
      // Track initial page view
      pageView(window.location.href);
    });
  }
};

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('ShareButtons', ShareButtons)
    app.component('EmailSignup', EmailSignup)
    app.component('Comments', Comments)
    app.component('Analytics', Analytics)
    
    // Call client setup function for initial analytics
    clientSetup();
  },
  setup() {
    // VitePress specific router handling is now moved to the Analytics component
    // The router.onAfterEach usage was causing an error
  }
}