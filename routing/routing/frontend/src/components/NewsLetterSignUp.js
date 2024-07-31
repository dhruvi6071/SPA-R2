import { useEffect } from 'react';
import classes from './NewsLetterSignUp.module.css';
import {useFetcher } from 'react-router-dom';
function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state} = fetcher;

  useEffect(() => {
    if(state === 'idle' && data && data.message) {
      window.alert('Signup successfull');
    };
  }, [data, state]);

  return (
    //Here fetcher.form will initialize an form but does not affect the route.
    <fetcher.Form method="post" className={classes.newsletter} action="/newsletter">
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;