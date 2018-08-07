"use strict";
const Constants = require ("../../../Constants");
const SpiritCairnBase = require("../setVMA/SpiritCairn");

class SpiritCairn extends SpiritCairnBase {
  constructor (game) {
    super(game, "Spirit Cairn", "Judgment", "JUD");
  }
}

module.exports = SpiritCairn;
