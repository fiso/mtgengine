"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nix extends UnimplementedCard {
  constructor (game) {
    super(game, "Nix", "Future Sight", "FUT");
  }
}

module.exports = Nix;
