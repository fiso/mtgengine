"use strict";
const Constants = require ("../../../Constants");
const SparkmageApprenticeBase = require("../setDDN/SparkmageApprentice");

class SparkmageApprentice extends SparkmageApprenticeBase {
  constructor(game) {
    super(game, "Sparkmage Apprentice", "Magic 2010", "M10");
  }
}

module.exports = SparkmageApprentice;
