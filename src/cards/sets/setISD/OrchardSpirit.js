"use strict";
const Constants = require ("../../../Constants");
const OrchardSpiritBase = require("../setORI/OrchardSpirit");

class OrchardSpirit extends OrchardSpiritBase {
  constructor (game) {
    super(game, "Orchard Spirit", "Innistrad", "ISD");
  }
}

module.exports = OrchardSpirit;
