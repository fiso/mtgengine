"use strict";
const Constants = require ("../../../Constants");
const ThranGolemBase = require("../setPCA/ThranGolem");

class ThranGolem extends ThranGolemBase {
  constructor (game) {
    super(game, "Thran Golem", "Magic 2012", "M12");
  }
}

module.exports = ThranGolem;
