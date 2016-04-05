"use strict";
const Constants = require ("../../../Constants");
const TrumpetingArmodonBase = require("../setBRB/TrumpetingArmodon");

class TrumpetingArmodon extends TrumpetingArmodonBase {
  constructor(game) {
    super(game, "Trumpeting Armodon", "Tempest", "TMP");
  }
}

module.exports = TrumpetingArmodon;
