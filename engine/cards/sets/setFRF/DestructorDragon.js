"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DestructorDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Destructor Dragon", "Fate Reforged", "FRF");
  }
}

module.exports = DestructorDragon;
