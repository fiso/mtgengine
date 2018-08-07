"use strict";
const Constants = require ("../../../Constants");
const EthercasteKnightBase = require("../setMM2/EthercasteKnight");

class EthercasteKnight extends EthercasteKnightBase {
  constructor (game) {
    super(game, "Ethercaste Knight", "Alara Reborn", "ARB");
  }
}

module.exports = EthercasteKnight;
