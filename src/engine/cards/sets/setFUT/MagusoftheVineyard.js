"use strict";
const Constants = require ("../../../Constants");
const MagusoftheVineyardBase = require("../setCMD/MagusoftheVineyard");

class MagusoftheVineyard extends MagusoftheVineyardBase {
  constructor (game) {
    super(game, "Magus of the Vineyard", "Future Sight", "FUT");
  }
}

module.exports = MagusoftheVineyard;
