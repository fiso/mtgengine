"use strict";
const Constants = require ("../../../Constants");
const BitterblossomBase = require("../setMM2/Bitterblossom");

class Bitterblossom extends BitterblossomBase {
  constructor (game) {
    super(game, "Bitterblossom", "Magic Online Promos", "PRM");
  }
}

module.exports = Bitterblossom;
