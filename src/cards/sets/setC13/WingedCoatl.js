"use strict";
const Constants = require ("../../../Constants");
const WingedCoatlBase = require("../setCMA/WingedCoatl");

class WingedCoatl extends WingedCoatlBase {
  constructor (game) {
    super(game, "Winged Coatl", "Commander 2013", "C13");
  }
}

module.exports = WingedCoatl;
