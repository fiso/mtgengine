"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HundredHandedOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Hundred-Handed One", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = HundredHandedOne;
