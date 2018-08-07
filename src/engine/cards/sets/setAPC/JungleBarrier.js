"use strict";
const Constants = require ("../../../Constants");
const JungleBarrierBase = require("../setE02/JungleBarrier");

class JungleBarrier extends JungleBarrierBase {
  constructor (game) {
    super(game, "Jungle Barrier", "Apocalypse", "APC");
  }
}

module.exports = JungleBarrier;
