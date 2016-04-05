"use strict";
const Constants = require ("../../../Constants");
const SeveredLegionBase = require("../setDPA/SeveredLegion");

class SeveredLegion extends SeveredLegionBase {
  constructor(game) {
    super(game, "Severed Legion", "Eighth Edition", "8ED");
  }
}

module.exports = SeveredLegion;
