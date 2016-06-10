"use strict";
const Constants = require ("../../../Constants");
const ThievingMagpieBase = require("../setDPA/ThievingMagpie");

class ThievingMagpie extends ThievingMagpieBase {
  constructor (game) {
    super(game, "Thieving Magpie", "Eighth Edition", "8ED");
  }
}

module.exports = ThievingMagpie;
