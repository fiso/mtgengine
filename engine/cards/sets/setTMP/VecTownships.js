"use strict";
const Constants = require ("../../../Constants");
const VecTownshipsBase = require("../setBRB/VecTownships");

class VecTownships extends VecTownshipsBase {
  constructor(game) {
    super(game, "Vec Townships", "Tempest", "TMP");
  }
}

module.exports = VecTownships;
