"use strict";
const Constants = require ("../../../Constants");
const ThranGolemBase = require("../setPCA/ThranGolem");

class ThranGolem extends ThranGolemBase {
  constructor (game) {
    super(game, "Thran Golem", "Magic Online Promos", "PRM");
  }
}

module.exports = ThranGolem;
