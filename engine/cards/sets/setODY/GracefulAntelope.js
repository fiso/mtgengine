"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GracefulAntelope extends Card {
  constructor(game) {
    super(game, "Graceful Antelope", "Odyssey", "ODY");
  }
}

module.exports = GracefulAntelope;
