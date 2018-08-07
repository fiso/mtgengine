"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarapaceForger extends UnimplementedCard {
  constructor (game) {
    super(game, "Carapace Forger", "Scars of Mirrodin", "SOM");
  }
}

module.exports = CarapaceForger;
