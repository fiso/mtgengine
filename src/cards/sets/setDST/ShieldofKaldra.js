"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldofKaldra extends UnimplementedCard {
  constructor(game) {
    super(game, "Shield of Kaldra", "Darksteel", "DST");
  }
}

module.exports = ShieldofKaldra;
