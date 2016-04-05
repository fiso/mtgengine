"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErtaitheCorrupted extends UnimplementedCard {
  constructor(game) {
    super(game, "Ertai, the Corrupted", "Planeshift", "PLS");
  }
}

module.exports = ErtaitheCorrupted;
