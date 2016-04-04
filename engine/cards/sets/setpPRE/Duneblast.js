"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DuneblastBase = require("../setKTK/Duneblast.js");

class Duneblast extends DuneblastBase {
  constructor(game) {
    super(game, "Duneblast", "Prerelease Events", "pPRE");
  }
}

module.exports = Duneblast;
