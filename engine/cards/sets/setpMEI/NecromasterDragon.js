"use strict";
const Constants = require ("../../../Constants");
const NecromasterDragonBase = require("../setDTK/NecromasterDragon");

class NecromasterDragon extends NecromasterDragonBase {
  constructor(game) {
    super(game, "Necromaster Dragon", "Media Inserts", "pMEI");
  }
}

module.exports = NecromasterDragon;
