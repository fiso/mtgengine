"use strict";
const Constants = require ("../../../Constants");
const PsionicBlastBase = require("../setP07/PsionicBlast");

class PsionicBlast extends PsionicBlastBase {
  constructor (game) {
    super(game, "Psionic Blast", "Limited Edition Beta", "LEB");
  }
}

module.exports = PsionicBlast;
