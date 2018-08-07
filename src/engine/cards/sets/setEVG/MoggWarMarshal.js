"use strict";
const Constants = require ("../../../Constants");
const MoggWarMarshalBase = require("../setEMA/MoggWarMarshal");

class MoggWarMarshal extends MoggWarMarshalBase {
  constructor (game) {
    super(game, "Mogg War Marshal", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = MoggWarMarshal;
