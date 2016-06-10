"use strict";
const Constants = require ("../../../Constants");
const SkirkFireMarshalBase = require("../setDD3_EVG/SkirkFireMarshal");

class SkirkFireMarshal extends SkirkFireMarshalBase {
  constructor (game) {
    super(game, "Skirk Fire Marshal", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = SkirkFireMarshal;
