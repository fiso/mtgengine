"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SelesnyaSanctuaryBase = require("../setC13/SelesnyaSanctuary.js");

class SelesnyaSanctuary extends SelesnyaSanctuaryBase {
  constructor(game) {
    super(game, "Selesnya Sanctuary", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SelesnyaSanctuary;
