"use strict";
const Constants = require ("../../../Constants");
const SeveredLegionBase = require("../setDPA/SeveredLegion");

class SeveredLegion extends SeveredLegionBase {
  constructor (game) {
    super(game, "Severed Legion", "Tenth Edition", "10E");
  }
}

module.exports = SeveredLegion;
