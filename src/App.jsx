import { initializeUI } from "../src/web/subscription";
import { unsubscribeUser } from "../src/web/subscription";

function App() {
  return (
    <>
      <header>
        <h1>Push Codelab</h1>
      </header>

      <main>
        <p>
          Welcome to the push messaging codelab. The button below needs to be
          fixed to support subscribing to push.
        </p>
        <p>
          <button
            className="js-push-btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={initializeUI}
          >
            구독
          </button>
          <button
            className="js-push-btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
            onClick={unsubscribeUser}
          >
            귀독 취소
          </button>
        </p>
        <section className="subscription-details js-subscription-details is-invisible">
          <p>
            your server to store in a database so that when you want to send a
            message you can lookup the subscription and send a message to it.
          </p>
          <p>
            To simplify things for this code lab copy the following details into
            the
            <a href="https://web-push-codelab.glitch.me/">
              Push Companion Site
            </a>
            keys on the site - so make sure they match.
          </p>
          <pre>
            <code className="js-subscription-json"></code>
          </pre>
        </section>
      </main>
    </>
  );
}

export default App;
