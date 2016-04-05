"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HundredHandedOne extends UnimplementedCard {
  constructor(game) {
    super(game, "Hundred-Handed One", "Theros", "THS");
  }
}

module.exports = HundredHandedOne;
