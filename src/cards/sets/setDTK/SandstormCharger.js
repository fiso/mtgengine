"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandstormCharger extends UnimplementedCard {
  constructor (game) {
    super(game, "Sandstorm Charger", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SandstormCharger;
