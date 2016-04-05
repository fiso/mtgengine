"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshCrocodile extends UnimplementedCard {
  constructor(game) {
    super(game, "Marsh Crocodile", "Planeshift", "PLS");
  }
}

module.exports = MarshCrocodile;
