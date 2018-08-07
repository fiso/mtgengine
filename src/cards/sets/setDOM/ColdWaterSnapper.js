"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ColdWaterSnapper extends UnimplementedCard {
  constructor (game) {
    super(game, "Cold-Water Snapper", "Dominaria", "DOM");
  }
}

module.exports = ColdWaterSnapper;
