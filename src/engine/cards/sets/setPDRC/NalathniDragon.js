"use strict";
const Constants = require ("../../../Constants");
const NalathniDragonBase = require("../setPRM/NalathniDragon");

class NalathniDragon extends NalathniDragonBase {
  constructor (game) {
    super(game, "Nalathni Dragon", "Dragon Con", "PDRC");
  }
}

module.exports = NalathniDragon;
