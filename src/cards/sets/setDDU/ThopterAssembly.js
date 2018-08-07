"use strict";
const Constants = require ("../../../Constants");
const ThopterAssemblyBase = require("../setC18/ThopterAssembly");

class ThopterAssembly extends ThopterAssemblyBase {
  constructor (game) {
    super(game, "Thopter Assembly", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = ThopterAssembly;
