"use strict";
const Constants = require ("../../../Constants");
const ShamanofthePackBase = require("../setEMA/ShamanofthePack");

class ShamanofthePack extends ShamanofthePackBase {
  constructor (game) {
    super(game, "Shaman of the Pack", "Magic Origins", "ORI");
  }
}

module.exports = ShamanofthePack;
