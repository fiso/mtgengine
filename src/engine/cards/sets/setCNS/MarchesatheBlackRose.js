"use strict";
const Constants = require ("../../../Constants");
const MarchesatheBlackRoseBase = require("../setC17/MarchesatheBlackRose");

class MarchesatheBlackRose extends MarchesatheBlackRoseBase {
  constructor (game) {
    super(game, "Marchesa, the Black Rose", "Conspiracy", "CNS");
  }
}

module.exports = MarchesatheBlackRose;
