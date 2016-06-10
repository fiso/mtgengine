"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientCarp extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Carp", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AncientCarp;
