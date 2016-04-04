"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeismicStrikeBase = require("../setDDG/SeismicStrike.js");

class SeismicStrike extends SeismicStrikeBase {
  constructor(game) {
    super(game, "Seismic Strike", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SeismicStrike;
