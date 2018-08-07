"use strict";
const Constants = require ("../../../Constants");
const BellowingFiendBase = require("../set7ED/BellowingFiend");

class BellowingFiend extends BellowingFiendBase {
  constructor (game) {
    super(game, "Bellowing Fiend", "Tempest", "TMP");
  }
}

module.exports = BellowingFiend;
