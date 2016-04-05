"use strict";
const Constants = require ("../../../Constants");
const MoggWarMarshalBase = require("../setDD3_EVG/MoggWarMarshal");

class MoggWarMarshal extends MoggWarMarshalBase {
  constructor(game) {
    super(game, "Mogg War Marshal", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = MoggWarMarshal;
