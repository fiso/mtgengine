"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiritCairnBase = require("../setJUD/SpiritCairn.js");

class SpiritCairn extends SpiritCairnBase {
  constructor(game) {
    super(game, "Spirit Cairn", "Vintage Masters", "VMA");
  }
}

module.exports = SpiritCairn;
