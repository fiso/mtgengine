"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KirdApe extends UnimplementedCard {
  constructor(game) {
    super(game, "Kird Ape", "Arabian Nights", "ARN");
  }
}

module.exports = KirdApe;
