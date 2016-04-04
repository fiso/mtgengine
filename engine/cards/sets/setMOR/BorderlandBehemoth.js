"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorderlandBehemothBase = require("../setC15/BorderlandBehemoth.js");

class BorderlandBehemoth extends BorderlandBehemothBase {
  constructor(game) {
    super(game, "Borderland Behemoth", "Morningtide", "MOR");
  }
}

module.exports = BorderlandBehemoth;
