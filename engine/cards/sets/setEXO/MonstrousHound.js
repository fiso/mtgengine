"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MonstrousHound extends Card {
  constructor(game) {
    super(game, "Monstrous Hound", "Exodus", "EXO");
  }
}

module.exports = MonstrousHound;
