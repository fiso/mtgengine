"use strict";
const Constants = require ("../../../Constants");
const MerEkNightbladeBase = require("../setIMA/MerEkNightblade");

class MerEkNightblade extends MerEkNightbladeBase {
  constructor (game) {
    super(game, "Mer-Ek Nightblade", "Khans of Tarkir", "KTK");
  }
}

module.exports = MerEkNightblade;
