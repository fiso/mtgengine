"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mirozel extends Card {
  constructor(game) {
    super(game, "Mirozel", "Exodus", "EXO");
  }
}

module.exports = Mirozel;
