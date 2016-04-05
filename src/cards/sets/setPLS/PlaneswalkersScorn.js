"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlaneswalkersScorn extends UnimplementedCard {
  constructor(game) {
    super(game, "Planeswalker's Scorn", "Planeshift", "PLS");
  }
}

module.exports = PlaneswalkersScorn;
