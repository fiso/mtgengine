"use strict";
const Constants = require ("../../../Constants");
const LathnuHellionBase = require("../setKLD/LathnuHellion");

class LathnuHellion extends LathnuHellionBase {
  constructor (game) {
    super(game, "Lathnu Hellion", "Kaladesh Promos", "PKLD");
  }
}

module.exports = LathnuHellion;
