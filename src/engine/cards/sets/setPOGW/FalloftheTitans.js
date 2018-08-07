"use strict";
const Constants = require ("../../../Constants");
const FalloftheTitansBase = require("../setOGW/FalloftheTitans");

class FalloftheTitans extends FalloftheTitansBase {
  constructor (game) {
    super(game, "Fall of the Titans", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = FalloftheTitans;
