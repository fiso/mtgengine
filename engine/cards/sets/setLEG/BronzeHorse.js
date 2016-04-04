"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BronzeHorseBase = require("../setCHR/BronzeHorse.js");

class BronzeHorse extends BronzeHorseBase {
  constructor(game) {
    super(game, "Bronze Horse", "Legends", "LEG");
  }
}

module.exports = BronzeHorse;
