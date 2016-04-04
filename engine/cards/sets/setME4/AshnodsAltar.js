"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AshnodsAltarBase = require("../setATQ/AshnodsAltar.js");

class AshnodsAltar extends AshnodsAltarBase {
  constructor(game) {
    super(game, "Ashnod's Altar", "Masters Edition IV", "ME4");
  }
}

module.exports = AshnodsAltar;
