"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DronepackKindred extends UnimplementedCard {
  constructor (game) {
    super(game, "Dronepack Kindred", "Eldritch Moon", "EMN");
  }
}

module.exports = DronepackKindred;
