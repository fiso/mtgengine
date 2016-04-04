"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ObeliskofEsperBase = require("../setARC/ObeliskofEsper.js");

class ObeliskofEsper extends ObeliskofEsperBase {
  constructor(game) {
    super(game, "Obelisk of Esper", "Shards of Alara", "ALA");
  }
}

module.exports = ObeliskofEsper;
