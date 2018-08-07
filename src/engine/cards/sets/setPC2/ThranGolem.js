"use strict";
const Constants = require ("../../../Constants");
const ThranGolemBase = require("../setPCA/ThranGolem");

class ThranGolem extends ThranGolemBase {
  constructor (game) {
    super(game, "Thran Golem", "Planechase 2012", "PC2");
  }
}

module.exports = ThranGolem;
