"use strict";
const Constants = require ("../../../Constants");
const OrchardSpiritBase = require("../setISD/OrchardSpirit");

class OrchardSpirit extends OrchardSpiritBase {
  constructor (game) {
    super(game, "Orchard Spirit", "Magic Origins", "ORI");
  }
}

module.exports = OrchardSpirit;
