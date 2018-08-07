"use strict";
const Constants = require ("../../../Constants");
const NightTerrorsBase = require("../setMM3/NightTerrors");

class NightTerrors extends NightTerrorsBase {
  constructor (game) {
    super(game, "Night Terrors", "Innistrad", "ISD");
  }
}

module.exports = NightTerrors;
