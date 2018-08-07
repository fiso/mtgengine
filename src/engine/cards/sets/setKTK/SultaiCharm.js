"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SultaiCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Sultai Charm", "Khans of Tarkir", "KTK");
  }
}

module.exports = SultaiCharm;
