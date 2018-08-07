"use strict";
const Constants = require ("../../../Constants");
const WildGriffinBase = require("../setCN2/WildGriffin");

class WildGriffin extends WildGriffinBase {
  constructor (game) {
    super(game, "Wild Griffin", "Masters Edition IV", "ME4");
  }
}

module.exports = WildGriffin;
