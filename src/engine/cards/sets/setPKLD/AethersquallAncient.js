"use strict";
const Constants = require ("../../../Constants");
const AethersquallAncientBase = require("../setKLD/AethersquallAncient");

class AethersquallAncient extends AethersquallAncientBase {
  constructor (game) {
    super(game, "Aethersquall Ancient", "Kaladesh Promos", "PKLD");
  }
}

module.exports = AethersquallAncient;
