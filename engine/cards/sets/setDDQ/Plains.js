"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlainsBase = require("../setATH/Plains.js");

class Plains extends PlainsBase {
  constructor(game) {
    super(game, "Plains", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Plains;
