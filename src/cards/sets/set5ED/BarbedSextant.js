"use strict";
const Constants = require ("../../../Constants");
const BarbedSextantBase = require("../setME2/BarbedSextant");

class BarbedSextant extends BarbedSextantBase {
  constructor (game) {
    super(game, "Barbed Sextant", "Fifth Edition", "5ED");
  }
}

module.exports = BarbedSextant;
