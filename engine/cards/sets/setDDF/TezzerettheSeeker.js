"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TezzerettheSeeker extends UnimplementedCard {
  constructor(game) {
    super(game, "Tezzeret the Seeker", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = TezzerettheSeeker;
