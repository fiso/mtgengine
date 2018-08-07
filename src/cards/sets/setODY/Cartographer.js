"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cartographer extends UnimplementedCard {
  constructor (game) {
    super(game, "Cartographer", "Odyssey", "ODY");
  }
}

module.exports = Cartographer;
