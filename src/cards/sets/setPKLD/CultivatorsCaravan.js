"use strict";
const Constants = require ("../../../Constants");
const CultivatorsCaravanBase = require("../setKLD/CultivatorsCaravan");

class CultivatorsCaravan extends CultivatorsCaravanBase {
  constructor (game) {
    super(game, "Cultivator's Caravan", "Kaladesh Promos", "PKLD");
  }
}

module.exports = CultivatorsCaravan;
