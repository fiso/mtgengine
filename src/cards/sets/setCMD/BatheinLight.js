"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BatheinLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Bathe in Light", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BatheinLight;
