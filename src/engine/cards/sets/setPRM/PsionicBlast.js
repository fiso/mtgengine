"use strict";
const Constants = require ("../../../Constants");
const PsionicBlastBase = require("../setP07/PsionicBlast");

class PsionicBlast extends PsionicBlastBase {
  constructor (game) {
    super(game, "Psionic Blast", "Magic Online Promos", "PRM");
  }
}

module.exports = PsionicBlast;
