"use strict";
const Constants = require ("../../../Constants");
const ObeliskofEsperBase = require("../setC13/ObeliskofEsper");

class ObeliskofEsper extends ObeliskofEsperBase {
  constructor (game) {
    super(game, "Obelisk of Esper", "Shards of Alara", "ALA");
  }
}

module.exports = ObeliskofEsper;
