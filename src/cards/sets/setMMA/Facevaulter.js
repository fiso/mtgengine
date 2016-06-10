"use strict";
const Constants = require ("../../../Constants");
const FacevaulterBase = require("../setLRW/Facevaulter");

class Facevaulter extends FacevaulterBase {
  constructor (game) {
    super(game, "Facevaulter", "Modern Masters", "MMA");
  }
}

module.exports = Facevaulter;
