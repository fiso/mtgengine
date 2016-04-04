"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrchardSpiritBase = require("../setISD/OrchardSpirit.js");

class OrchardSpirit extends OrchardSpiritBase {
  constructor(game) {
    super(game, "Orchard Spirit", "Magic Origins", "ORI");
  }
}

module.exports = OrchardSpirit;
