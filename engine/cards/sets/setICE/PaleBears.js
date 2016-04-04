"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PaleBears extends Card {
  constructor(game) {
    super(game, "Pale Bears", "Ice Age", "ICE");
  }
}

module.exports = PaleBears;
