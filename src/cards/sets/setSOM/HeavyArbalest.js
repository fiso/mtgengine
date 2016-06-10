"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeavyArbalest extends UnimplementedCard {
  constructor (game) {
    super(game, "Heavy Arbalest", "Scars of Mirrodin", "SOM");
  }
}

module.exports = HeavyArbalest;
