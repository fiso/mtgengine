"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecromasterDragonBase = require("../setDTK/NecromasterDragon.js");

class NecromasterDragon extends NecromasterDragonBase {
  constructor(game) {
    super(game, "Necromaster Dragon", "Media Inserts", "pMEI");
  }
}

module.exports = NecromasterDragon;
