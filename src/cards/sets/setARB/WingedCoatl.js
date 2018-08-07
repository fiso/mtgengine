"use strict";
const Constants = require ("../../../Constants");
const WingedCoatlBase = require("../setCMA/WingedCoatl");

class WingedCoatl extends WingedCoatlBase {
  constructor (game) {
    super(game, "Winged Coatl", "Alara Reborn", "ARB");
  }
}

module.exports = WingedCoatl;
