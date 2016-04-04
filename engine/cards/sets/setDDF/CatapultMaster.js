"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CatapultMaster extends Card {
  constructor(game) {
    super(game, "Catapult Master", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = CatapultMaster;
