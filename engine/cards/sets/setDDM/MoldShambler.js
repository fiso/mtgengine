"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoldShamblerBase = require("../setC13/MoldShambler.js");

class MoldShambler extends MoldShamblerBase {
  constructor(game) {
    super(game, "Mold Shambler", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = MoldShambler;
