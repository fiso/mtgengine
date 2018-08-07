"use strict";
const Constants = require ("../../../Constants");
const WildGriffinBase = require("../setCN2/WildGriffin");

class WildGriffin extends WildGriffinBase {
  constructor (game) {
    super(game, "Wild Griffin", "Magic 2011", "M11");
  }
}

module.exports = WildGriffin;
