"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GracefulAntelope extends UnimplementedCard {
  constructor(game) {
    super(game, "Graceful Antelope", "Odyssey", "ODY");
  }
}

module.exports = GracefulAntelope;
