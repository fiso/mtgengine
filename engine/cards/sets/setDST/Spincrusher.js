"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Spincrusher extends Card {
  constructor(game) {
    super(game, "Spincrusher", "Darksteel", "DST");
  }
}

module.exports = Spincrusher;
