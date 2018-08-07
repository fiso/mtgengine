"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AerialModification extends UnimplementedCard {
  constructor (game) {
    super(game, "Aerial Modification", "Aether Revolt", "AER");
  }
}

module.exports = AerialModification;
