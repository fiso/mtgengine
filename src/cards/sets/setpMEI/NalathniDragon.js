"use strict";
const Constants = require ("../../../Constants");
const NalathniDragonBase = require("../setpDRC/NalathniDragon");

class NalathniDragon extends NalathniDragonBase {
  constructor (game) {
    super(game, "Nalathni Dragon", "Media Inserts", "pMEI");
  }
}

module.exports = NalathniDragon;
