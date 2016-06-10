"use strict";
const Constants = require ("../../../Constants");
const VecTownshipsBase = require("../setBRB/VecTownships");

class VecTownships extends VecTownshipsBase {
  constructor (game) {
    super(game, "Vec Townships", "Tempest Remastered", "TPR");
  }
}

module.exports = VecTownships;
