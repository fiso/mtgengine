"use strict";
const Constants = require ("../../../Constants");
const SpiritCairnBase = require("../setJUD/SpiritCairn");

class SpiritCairn extends SpiritCairnBase {
  constructor (game) {
    super(game, "Spirit Cairn", "Vintage Masters", "VMA");
  }
}

module.exports = SpiritCairn;
