"use strict";
const Constants = require ("../../../Constants");
const ExtractfromDarknessBase = require("../setE01/ExtractfromDarkness");

class ExtractfromDarkness extends ExtractfromDarknessBase {
  constructor (game) {
    super(game, "Extract from Darkness", "Conspiracy", "CNS");
  }
}

module.exports = ExtractfromDarkness;
