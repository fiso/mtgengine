"use strict";
const Constants = require ("../../../Constants");
const RekindlingPhoenixBase = require("../setPRIX/RekindlingPhoenix");

class RekindlingPhoenix extends RekindlingPhoenixBase {
  constructor (game) {
    super(game, "Rekindling Phoenix", "Rivals of Ixalan", "RIX");
  }
}

module.exports = RekindlingPhoenix;
