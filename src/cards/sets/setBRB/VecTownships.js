"use strict";
const Constants = require ("../../../Constants");
const VecTownshipsBase = require("../setTPR/VecTownships");

class VecTownships extends VecTownshipsBase {
  constructor (game) {
    super(game, "Vec Townships", "Battle Royale Box Set", "BRB");
  }
}

module.exports = VecTownships;
