"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherVial extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Vial", "Iconic Masters", "IMA");
  }
}

module.exports = AetherVial;
