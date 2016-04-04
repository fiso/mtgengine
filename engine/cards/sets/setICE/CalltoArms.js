"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CalltoArms extends Card {
  constructor(game) {
    super(game, "Call to Arms", "Ice Age", "ICE");
  }
}

module.exports = CalltoArms;
