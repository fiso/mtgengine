"use strict";
const Constants = require ("../../../Constants");
const DuneblastBase = require("../setKTK/Duneblast");

class Duneblast extends DuneblastBase {
  constructor (game) {
    super(game, "Duneblast", "Prerelease Events", "pPRE");
  }
}

module.exports = Duneblast;
