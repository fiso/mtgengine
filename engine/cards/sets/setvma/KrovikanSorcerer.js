"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrovikanSorcererBase = require("../set5ED/KrovikanSorcerer.js");

class KrovikanSorcerer extends KrovikanSorcererBase {
  constructor(game) {
    super(game, "Krovikan Sorcerer", "Vintage Masters", "VMA");
  }
}

module.exports = KrovikanSorcerer;
