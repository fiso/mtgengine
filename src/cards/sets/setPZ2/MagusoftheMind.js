"use strict";
const Constants = require ("../../../Constants");
const MagusoftheMindBase = require("../setC17/MagusoftheMind");

class MagusoftheMind extends MagusoftheMindBase {
  constructor (game) {
    super(game, "Magus of the Mind", "You Make the Cube", "PZ2");
  }
}

module.exports = MagusoftheMind;
