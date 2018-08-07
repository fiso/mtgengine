"use strict";
const Constants = require ("../../../Constants");
const CalltoArmsBase = require("../setME3/CalltoArms");

class CalltoArms extends CalltoArmsBase {
  constructor (game) {
    super(game, "Call to Arms", "Ice Age", "ICE");
  }
}

module.exports = CalltoArms;
