"use strict";
const Constants = require ("../../../Constants");
const SteelshapersGiftBase = require("../setTD2/SteelshapersGift");

class SteelshapersGift extends SteelshapersGiftBase {
  constructor (game) {
    super(game, "Steelshaper's Gift", "Fifth Dawn", "5DN");
  }
}

module.exports = SteelshapersGift;
