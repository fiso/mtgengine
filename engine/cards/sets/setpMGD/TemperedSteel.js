"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemperedSteel extends Card {
  constructor(game) {
    super(game, "Tempered Steel", "Magic Game Day", "pMGD");
  }
}

module.exports = TemperedSteel;
