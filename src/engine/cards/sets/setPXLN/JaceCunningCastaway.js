"use strict";
const Constants = require ("../../../Constants");
const JaceCunningCastawayBase = require("../setPS18/JaceCunningCastaway");

class JaceCunningCastaway extends JaceCunningCastawayBase {
  constructor (game) {
    super(game, "Jace, Cunning Castaway", "Ixalan Promos", "PXLN");
  }
}

module.exports = JaceCunningCastaway;
