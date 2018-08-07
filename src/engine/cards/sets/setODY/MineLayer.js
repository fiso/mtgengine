"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MineLayer extends UnimplementedCard {
  constructor (game) {
    super(game, "Mine Layer", "Odyssey", "ODY");
  }
}

module.exports = MineLayer;
