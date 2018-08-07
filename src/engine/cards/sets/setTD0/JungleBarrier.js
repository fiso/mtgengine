"use strict";
const Constants = require ("../../../Constants");
const JungleBarrierBase = require("../setE02/JungleBarrier");

class JungleBarrier extends JungleBarrierBase {
  constructor (game) {
    super(game, "Jungle Barrier", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = JungleBarrier;
