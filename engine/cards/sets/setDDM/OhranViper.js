"use strict";
const Constants = require ("../../../Constants");
const OhranViperBase = require("../setCSP/OhranViper");

class OhranViper extends OhranViperBase {
  constructor(game) {
    super(game, "Ohran Viper", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = OhranViper;
