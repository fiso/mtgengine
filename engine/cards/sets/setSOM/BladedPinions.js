"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BladedPinions extends UnimplementedCard {
  constructor(game) {
    super(game, "Bladed Pinions", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BladedPinions;
