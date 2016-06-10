"use strict";
const Constants = require ("../../../Constants");
const CalltoArmsBase = require("../setICE/CalltoArms");

class CalltoArms extends CalltoArmsBase {
  constructor (game) {
    super(game, "Call to Arms", "Masters Edition III", "ME3");
  }
}

module.exports = CalltoArms;
