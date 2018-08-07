"use strict";
const Constants = require ("../../../Constants");
const ThranGolemBase = require("../setPCA/ThranGolem");

class ThranGolem extends ThranGolemBase {
  constructor (game) {
    super(game, "Thran Golem", "Ninth Edition", "9ED");
  }
}

module.exports = ThranGolem;
