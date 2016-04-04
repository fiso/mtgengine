"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbsorbVisBase = require("../setCON/AbsorbVis.js");

class AbsorbVis extends AbsorbVisBase {
  constructor(game) {
    super(game, "Absorb Vis", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = AbsorbVis;
