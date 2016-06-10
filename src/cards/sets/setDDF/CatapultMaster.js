"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatapultMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Catapult Master", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = CatapultMaster;
