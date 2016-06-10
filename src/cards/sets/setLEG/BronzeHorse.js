"use strict";
const Constants = require ("../../../Constants");
const BronzeHorseBase = require("../setCHR/BronzeHorse");

class BronzeHorse extends BronzeHorseBase {
  constructor (game) {
    super(game, "Bronze Horse", "Legends", "LEG");
  }
}

module.exports = BronzeHorse;
