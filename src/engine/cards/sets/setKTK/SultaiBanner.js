"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SultaiBanner extends UnimplementedCard {
  constructor (game) {
    super(game, "Sultai Banner", "Khans of Tarkir", "KTK");
  }
}

module.exports = SultaiBanner;
