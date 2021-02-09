import Vue from 'vue';
const __PATH_MESSAGE_UNIFORM = '/a/message/uniform';

export default function(io) {
  const Simple = function() {

    this.subscribe = function() {
      const user = Vue.prototype.$meta.store.state.auth.user.op;
      if (user.anonymous) return;
      this.subscribeId = io.subscribe(
        __PATH_MESSAGE_UNIFORM, this._onMessage.bind(this), this._onSubscribed.bind(this)
      );
    };

    this._onMessage = function({ message }) {
      const content = JSON.parse(message.content);
      console.log(message);
    };

    this._onSubscribed = function() {
      // donothing
    };

  };
  return {
    simple() {
      const simple = new Simple();
      return simple;
    },
  };
}