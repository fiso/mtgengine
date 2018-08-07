"use strict";
const Constants = require ("../../../Constants");
const MoggWarMarshalBase = require("../setEMA/MoggWarMarshal");

class MoggWarMarshal extends MoggWarMarshalBase {
  constructor (game) {
    super(game, "Mogg War Marshal", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = MoggWarMarshal;
