"use strict";
const Constants = require ("../../../Constants");
const PalinchronBase = require("../setULG/Palinchron");

class Palinchron extends PalinchronBase {
  constructor(game) {
    super(game, "Palinchron", "Vintage Masters", "VMA");
  }
}

module.exports = Palinchron;
