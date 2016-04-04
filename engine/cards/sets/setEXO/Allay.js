"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Allay extends Card {
  constructor(game) {
    super(game, "Allay", "Exodus", "EXO");
  }
}

module.exports = Allay;
