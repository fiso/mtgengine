"use strict";
const Constants = require ("../../../Constants");
const AshnodsAltarBase = require("../setATQ/AshnodsAltar");

class AshnodsAltar extends AshnodsAltarBase {
  constructor (game) {
    super(game, "Ashnod's Altar", "Chronicles", "CHR");
  }
}

module.exports = AshnodsAltar;
