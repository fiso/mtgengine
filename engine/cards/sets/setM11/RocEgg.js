"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RocEgg extends Card {
  constructor(game) {
    super(game, "Roc Egg", "Magic 2011", "M11");
  }
}

module.exports = RocEgg;
