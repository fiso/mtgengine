"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClayPigeon extends UnimplementedCard {
  constructor(game) {
    super(game, "Clay Pigeon", "Unglued", "UGL");
  }
}

module.exports = ClayPigeon;
