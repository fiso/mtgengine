"use strict";
const Constants = require ("../../../Constants");
const JungleBarrierBase = require("../setE02/JungleBarrier");

class JungleBarrier extends JungleBarrierBase {
  constructor (game) {
    super(game, "Jungle Barrier", "Iconic Masters", "IMA");
  }
}

module.exports = JungleBarrier;
