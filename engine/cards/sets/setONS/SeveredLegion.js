"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeveredLegionBase = require("../setDPA/SeveredLegion.js");

class SeveredLegion extends SeveredLegionBase {
  constructor(game) {
    super(game, "Severed Legion", "Onslaught", "ONS");
  }
}

module.exports = SeveredLegion;
