"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThievingMagpieBase = require("../setDPA/ThievingMagpie.js");

class ThievingMagpie extends ThievingMagpieBase {
  constructor(game) {
    super(game, "Thieving Magpie", "Ninth Edition", "9ED");
  }
}

module.exports = ThievingMagpie;
