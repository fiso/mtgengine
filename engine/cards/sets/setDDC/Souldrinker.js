"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SouldrinkerBase = require("../setDD3_DVD/Souldrinker.js");

class Souldrinker extends SouldrinkerBase {
  constructor(game) {
    super(game, "Souldrinker", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = Souldrinker;
