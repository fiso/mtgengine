"use strict";
const Constants = require ("../../../Constants");
const ChandrasFuryBase = require("../setORI/ChandrasFury");

class ChandrasFury extends ChandrasFuryBase {
  constructor (game) {
    super(game, "Chandra's Fury", "URL/Convention Promos", "PURL");
  }
}

module.exports = ChandrasFury;
