"use strict";
const Constants = require ("../../../Constants");
const ThievingMagpieBase = require("../setDPA/ThievingMagpie");

class ThievingMagpie extends ThievingMagpieBase {
  constructor(game) {
    super(game, "Thieving Magpie", "Urza's Destiny", "UDS");
  }
}

module.exports = ThievingMagpie;
