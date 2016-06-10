"use strict";
const Constants = require ("../../../Constants");
const SadisticGleeBase = require("../setBRB/SadisticGlee");

class SadisticGlee extends SadisticGleeBase {
  constructor (game) {
    super(game, "Sadistic Glee", "Tempest", "TMP");
  }
}

module.exports = SadisticGlee;
