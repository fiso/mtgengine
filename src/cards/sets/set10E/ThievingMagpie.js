"use strict";
const Constants = require ("../../../Constants");
const ThievingMagpieBase = require("../setDPA/ThievingMagpie");

class ThievingMagpie extends ThievingMagpieBase {
  constructor(game) {
    super(game, "Thieving Magpie", "Tenth Edition", "10E");
  }
}

module.exports = ThievingMagpie;
