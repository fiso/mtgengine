"use strict";
const Constants = require ("../../../Constants");
const ZetalpaPrimalDawnBase = require("../setPRIX/ZetalpaPrimalDawn");

class ZetalpaPrimalDawn extends ZetalpaPrimalDawnBase {
  constructor (game) {
    super(game, "Zetalpa, Primal Dawn", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ZetalpaPrimalDawn;
