"use strict";
const Constants = require ("../../../Constants");
const BarbedSextantBase = require("../setME2/BarbedSextant");

class BarbedSextant extends BarbedSextantBase {
  constructor (game) {
    super(game, "Barbed Sextant", "Deckmasters", "DKM");
  }
}

module.exports = BarbedSextant;
