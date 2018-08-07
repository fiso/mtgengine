"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LayoftheLand extends UnimplementedCard {
  constructor (game) {
    super(game, "Lay of the Land", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = LayoftheLand;
