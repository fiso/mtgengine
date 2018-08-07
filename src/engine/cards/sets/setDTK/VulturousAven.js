"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VulturousAven extends UnimplementedCard {
  constructor (game) {
    super(game, "Vulturous Aven", "Dragons of Tarkir", "DTK");
  }
}

module.exports = VulturousAven;
