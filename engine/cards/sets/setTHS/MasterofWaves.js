"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterofWaves extends Card {
  constructor(game) {
    super(game, "Master of Waves", "Theros", "THS");
  }
}

module.exports = MasterofWaves;
