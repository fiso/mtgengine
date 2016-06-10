"use strict";
const Constants = require ("../../../Constants");
const MarchesatheBlackRoseBase = require("../setCNS/MarchesatheBlackRose");

class MarchesatheBlackRose extends MarchesatheBlackRoseBase {
  constructor (game) {
    super(game, "Marchesa, the Black Rose", "Vintage Masters", "VMA");
  }
}

module.exports = MarchesatheBlackRose;
