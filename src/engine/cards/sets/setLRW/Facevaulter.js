"use strict";
const Constants = require ("../../../Constants");
const FacevaulterBase = require("../setMMA/Facevaulter");

class Facevaulter extends FacevaulterBase {
  constructor (game) {
    super(game, "Facevaulter", "Lorwyn", "LRW");
  }
}

module.exports = Facevaulter;
