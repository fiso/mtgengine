"use strict";
const Constants = require ("../../../Constants");
const BarbedSextantBase = require("../setCST/BarbedSextant");

class BarbedSextant extends BarbedSextantBase {
  constructor (game) {
    super(game, "Barbed Sextant", "Deckmasters", "DKM");
  }
}

module.exports = BarbedSextant;
