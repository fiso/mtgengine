"use strict";
const Constants = require ("../../../Constants");
const ThievingMagpieBase = require("../setDPA/ThievingMagpie");

class ThievingMagpie extends ThievingMagpieBase {
  constructor (game) {
    super(game, "Thieving Magpie", "Ninth Edition", "9ED");
  }
}

module.exports = ThievingMagpie;
