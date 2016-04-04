"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeetlebackChiefBase = require("../setC14/BeetlebackChief.js");

class BeetlebackChief extends BeetlebackChiefBase {
  constructor(game) {
    super(game, "Beetleback Chief", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = BeetlebackChief;
