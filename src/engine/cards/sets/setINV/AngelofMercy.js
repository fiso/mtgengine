"use strict";
const Constants = require ("../../../Constants");
const AngelofMercyBase = require("../setIMA/AngelofMercy");

class AngelofMercy extends AngelofMercyBase {
  constructor (game) {
    super(game, "Angel of Mercy", "Invasion", "INV");
  }
}

module.exports = AngelofMercy;
