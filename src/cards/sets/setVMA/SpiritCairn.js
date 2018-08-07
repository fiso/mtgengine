"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritCairn extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit Cairn", "Vintage Masters", "VMA");
  }
}

module.exports = SpiritCairn;
