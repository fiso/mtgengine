"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmsDealerBase = require("../setM13/ArmsDealer.js");

class ArmsDealer extends ArmsDealerBase {
  constructor(game) {
    super(game, "Arms Dealer", "Mercadian Masques", "MMQ");
  }
}

module.exports = ArmsDealer;
