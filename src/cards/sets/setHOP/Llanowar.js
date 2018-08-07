"use strict";
const Constants = require ("../../../Constants");
const LlanowarBase = require("../setPCA/Llanowar");

class Llanowar extends LlanowarBase {
  constructor (game) {
    super(game, "Llanowar", "Planechase", "HOP");
  }
}

module.exports = Llanowar;
