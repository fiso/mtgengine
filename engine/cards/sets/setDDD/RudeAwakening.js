"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RudeAwakeningBase = require("../setDD3_GVL/RudeAwakening.js");

class RudeAwakening extends RudeAwakeningBase {
  constructor(game) {
    super(game, "Rude Awakening", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = RudeAwakening;
