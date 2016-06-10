"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DromokaMonument extends UnimplementedCard {
  constructor (game) {
    super(game, "Dromoka Monument", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DromokaMonument;
