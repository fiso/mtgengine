"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeizetheInitiative extends UnimplementedCard {
  constructor(game) {
    super(game, "Seize the Initiative", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SeizetheInitiative;
