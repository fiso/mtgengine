"use strict";
const Constants = require ("../../../Constants");
const ArchofOrazcaBase = require("../setPRIX/ArchofOrazca");

class ArchofOrazca extends ArchofOrazcaBase {
  constructor (game) {
    super(game, "Arch of Orazca", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ArchofOrazca;
