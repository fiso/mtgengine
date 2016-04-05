"use strict";
const Constants = require ("../../../Constants");
const ChandrasFuryBase = require("../setM13/ChandrasFury");

class ChandrasFury extends ChandrasFuryBase {
  constructor(game) {
    super(game, "Chandra's Fury", "Magic Origins", "ORI");
  }
}

module.exports = ChandrasFury;
