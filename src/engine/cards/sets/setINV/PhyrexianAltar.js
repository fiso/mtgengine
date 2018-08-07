"use strict";
const Constants = require ("../../../Constants");
const PhyrexianAltarBase = require("../setTD2/PhyrexianAltar");

class PhyrexianAltar extends PhyrexianAltarBase {
  constructor (game) {
    super(game, "Phyrexian Altar", "Invasion", "INV");
  }
}

module.exports = PhyrexianAltar;
