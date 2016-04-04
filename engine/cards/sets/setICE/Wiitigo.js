"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wiitigo extends Card {
  constructor(game) {
    super(game, "Wiitigo", "Ice Age", "ICE");
  }
}

module.exports = Wiitigo;
