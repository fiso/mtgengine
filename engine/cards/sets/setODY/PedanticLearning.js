"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PedanticLearning extends UnimplementedCard {
  constructor(game) {
    super(game, "Pedantic Learning", "Odyssey", "ODY");
  }
}

module.exports = PedanticLearning;
