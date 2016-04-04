"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OhranViperBase = require("../setCSP/OhranViper.js");

class OhranViper extends OhranViperBase {
  constructor(game) {
    super(game, "Ohran Viper", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = OhranViper;
