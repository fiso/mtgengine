"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightHerder extends UnimplementedCard {
  constructor(game) {
    super(game, "Blight Herder", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightHerder;
