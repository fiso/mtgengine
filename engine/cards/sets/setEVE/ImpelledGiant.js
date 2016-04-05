"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImpelledGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Impelled Giant", "Eventide", "EVE");
  }
}

module.exports = ImpelledGiant;
