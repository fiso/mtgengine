"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LichsTomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Lich's Tomb", "Darksteel", "DST");
  }
}

module.exports = LichsTomb;
