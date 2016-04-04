"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DestructorDragon extends Card {
  constructor(game) {
    super(game, "Destructor Dragon", "Fate Reforged", "FRF");
  }
}

module.exports = DestructorDragon;
