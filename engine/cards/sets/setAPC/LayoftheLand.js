"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LayoftheLand extends UnimplementedCard {
  constructor(game) {
    super(game, "Lay of the Land", "Apocalypse", "APC");
  }
}

module.exports = LayoftheLand;
