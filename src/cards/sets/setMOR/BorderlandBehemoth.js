"use strict";
const Constants = require ("../../../Constants");
const BorderlandBehemothBase = require("../setCM2/BorderlandBehemoth");

class BorderlandBehemoth extends BorderlandBehemothBase {
  constructor (game) {
    super(game, "Borderland Behemoth", "Morningtide", "MOR");
  }
}

module.exports = BorderlandBehemoth;
