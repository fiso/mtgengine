"use strict";
const Constants = require ("../../../Constants");
const WildGriffinBase = require("../setCN2/WildGriffin");

class WildGriffin extends WildGriffinBase {
  constructor (game) {
    super(game, "Wild Griffin", "Tenth Edition", "10E");
  }
}

module.exports = WildGriffin;
