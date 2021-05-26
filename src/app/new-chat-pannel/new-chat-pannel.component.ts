import { Component, OnInit } from '@angular/core';

function randint(min, max) {
  return Math.random() * (max - min) + min;
}


@Component({
  selector: 'app-new-chat-pannel',
  templateUrl: './new-chat-pannel.component.html',
  styleUrls: ['./new-chat-pannel.component.scss']
})
export class NewChatPannelComponent implements OnInit {
  text: "";
  public user = {
    name: '',
    avatar: 'https://randomuser.me/api/portraits/men/30.jpg'
  };
  public contact = {
    name: 'Sayali',
    avatar: 'https://randomuser.me/api/portraits/women/76.jpg'
  };


  msg(user, contact, message, timestamp = Date.now()) {
    return {
      user,
      contact,
      message,
      timestamp,
    }
  }

  send(msg) {
    return this.msg(this.user, this.contact, msg)
  }
  recv(msg) {
    return this.msg(this.contact, this.user, msg)
  }

  messages: any[] = []

  msgInterval = randint(500, 1500)
  msgs = [{
    action: 'send',
    msg: `Hey ${this.contact.name}!`
  }, {
    action: 'recv',
    msg: `Yo ${this.user.name}, what's up`
  }, {
    action: 'send',
    msg: `I'm doing great, thanks`
  }, {
    action: 'send',
    msg: 'How about you?'
  }, {
    action: 'recv',
    msg: 'Not too bad, thanks'
  }, {
    action: 'send',
    msg: 'I was wondering if you could help me?'
  }, {
    action: 'recv',
    msg: 'Sure, any time!'
  }, {
    action: 'send',
    msg: 'Awesome, you have time for a call!'
  }, {
    action: 'recv',
    msg: 'I can jump on in like 20 minutes.'
  }, {
    action: 'recv',
    msg: 'Does that work for you?'
  }, {
    action: 'send',
    msg: `Totally, just ping me when you're ready!`
  },
  ]

  nextMsg() {
    if (this.msgs.length) {
      const msg = this.msgs[0]
      this.messages.push(this[msg.action](msg.msg))
      this.msgs = this.msgs
        .splice(1, this.msgs.length)
    } else {
      clearInterval(this.autoSender)
    }
  }
  autoSender = null

  constructor() { }

  ngOnInit(): void {
    this.nextMsg()
    this.autoSender = setInterval(() =>
      this.nextMsg(), this.msgInterval
    )
  }

  ngOnDestroy() {
    clearInterval(this.autoSender)
  }
  onKeyUp(x) {

    this.text += x.target.value + ' | ';
  }

}
