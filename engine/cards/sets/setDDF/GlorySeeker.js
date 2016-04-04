"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlorySeeker extends UnimplementedCard {
  constructor(game) {
    super(game, "Glory Seeker", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = GlorySeeker;
