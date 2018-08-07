"use strict";
const Constants = require ("../../../Constants");
const ChandrasFuryBase = require("../setORI/ChandrasFury");

class ChandrasFury extends ChandrasFuryBase {
  constructor (game) {
    super(game, "Chandra's Fury", "Magic 2013", "M13");
  }
}

module.exports = ChandrasFury;
