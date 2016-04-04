"use strict";
const Constants = require ("../../../Constants");
const MagusoftheVineyardBase = require("../setFUT/MagusoftheVineyard");

class MagusoftheVineyard extends MagusoftheVineyardBase {
  constructor(game) {
    super(game, "Magus of the Vineyard", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = MagusoftheVineyard;
