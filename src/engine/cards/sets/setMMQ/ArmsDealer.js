"use strict";
const Constants = require ("../../../Constants");
const ArmsDealerBase = require("../setM13/ArmsDealer");

class ArmsDealer extends ArmsDealerBase {
  constructor (game) {
    super(game, "Arms Dealer", "Mercadian Masques", "MMQ");
  }
}

module.exports = ArmsDealer;
