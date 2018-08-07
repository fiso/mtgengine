"use strict";
const Constants = require ("../../../Constants");
const RuinsofOranRiefBase = require("../setOGW/RuinsofOranRief");

class RuinsofOranRief extends RuinsofOranRiefBase {
  constructor (game) {
    super(game, "Ruins of Oran-Rief", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = RuinsofOranRief;
