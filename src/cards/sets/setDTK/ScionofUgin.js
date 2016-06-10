"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScionofUgin extends UnimplementedCard {
  constructor (game) {
    super(game, "Scion of Ugin", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ScionofUgin;
