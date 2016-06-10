"use strict";
const Constants = require ("../../../Constants");
const BronzeHorseBase = require("../setCHR/BronzeHorse");

class BronzeHorse extends BronzeHorseBase {
  constructor (game) {
    super(game, "Bronze Horse", "Masters Edition IV", "ME4");
  }
}

module.exports = BronzeHorse;
