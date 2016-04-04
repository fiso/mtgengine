"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CalltoMindBase = require("../setC14/CalltoMind.js");

class CalltoMind extends CalltoMindBase {
  constructor(game) {
    super(game, "Call to Mind", "Magic 2011", "M11");
  }
}

module.exports = CalltoMind;
