"use strict";
const Constants = require ("../../../Constants");
const CalltoMindBase = require("../setC14/CalltoMind");

class CalltoMind extends CalltoMindBase {
  constructor(game) {
    super(game, "Call to Mind", "Magic 2011", "M11");
  }
}

module.exports = CalltoMind;
