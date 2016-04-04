"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JoragaInvocation extends Card {
  constructor(game) {
    super(game, "Joraga Invocation", "Magic Origins", "ORI");
  }
}

module.exports = JoragaInvocation;
