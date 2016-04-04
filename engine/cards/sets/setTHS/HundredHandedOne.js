"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HundredHandedOne extends Card {
  constructor(game) {
    super(game, "Hundred-Handed One", "Theros", "THS");
  }
}

module.exports = HundredHandedOne;
