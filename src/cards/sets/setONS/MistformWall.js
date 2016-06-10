"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistformWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Mistform Wall", "Onslaught", "ONS");
  }
}

module.exports = MistformWall;
