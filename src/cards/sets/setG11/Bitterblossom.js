"use strict";
const Constants = require ("../../../Constants");
const BitterblossomBase = require("../setMM2/Bitterblossom");

class Bitterblossom extends BitterblossomBase {
  constructor (game) {
    super(game, "Bitterblossom", "Judge Gift Cards 2011", "G11");
  }
}

module.exports = Bitterblossom;
