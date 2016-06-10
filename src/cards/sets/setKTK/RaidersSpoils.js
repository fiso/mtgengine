"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaidersSpoils extends UnimplementedCard {
  constructor (game) {
    super(game, "Raiders' Spoils", "Khans of Tarkir", "KTK");
  }
}

module.exports = RaidersSpoils;
