"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlorySeeker extends Card {
  constructor(game) {
    super(game, "Glory Seeker", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = GlorySeeker;
