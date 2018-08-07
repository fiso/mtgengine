"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AtarkaPummeler extends UnimplementedCard {
  constructor (game) {
    super(game, "Atarka Pummeler", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AtarkaPummeler;
