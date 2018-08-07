"use strict";
const Constants = require ("../../../Constants");
const ThranGolemBase = require("../setPCA/ThranGolem");

class ThranGolem extends ThranGolemBase {
  constructor (game) {
    super(game, "Thran Golem", "Urza's Destiny", "UDS");
  }
}

module.exports = ThranGolem;
