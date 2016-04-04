"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RabidElephant extends UnimplementedCard {
  constructor(game) {
    super(game, "Rabid Elephant", "Odyssey", "ODY");
  }
}

module.exports = RabidElephant;
