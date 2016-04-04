"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TeferisIsle extends Card {
  constructor(game) {
    super(game, "Teferi's Isle", "Mirage", "MIR");
  }
}

module.exports = TeferisIsle;
