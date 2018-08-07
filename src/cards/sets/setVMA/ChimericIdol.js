"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChimericIdol extends UnimplementedCard {
  constructor (game) {
    super(game, "Chimeric Idol", "Vintage Masters", "VMA");
  }
}

module.exports = ChimericIdol;
