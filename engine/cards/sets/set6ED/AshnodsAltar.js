"use strict";
const Constants = require ("../../../Constants");
const AshnodsAltarBase = require("../setATQ/AshnodsAltar");

class AshnodsAltar extends AshnodsAltarBase {
  constructor(game) {
    super(game, "Ashnod's Altar", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AshnodsAltar;
