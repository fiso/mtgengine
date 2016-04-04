"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThranGolemBase = require("../setM12/ThranGolem.js");

class ThranGolem extends ThranGolemBase {
  constructor(game) {
    super(game, "Thran Golem", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ThranGolem;
