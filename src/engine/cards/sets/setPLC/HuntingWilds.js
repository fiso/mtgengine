"use strict";
const Constants = require ("../../../Constants");
const HuntingWildsBase = require("../setC18/HuntingWilds");

class HuntingWilds extends HuntingWildsBase {
  constructor (game) {
    super(game, "Hunting Wilds", "Planar Chaos", "PLC");
  }
}

module.exports = HuntingWilds;
