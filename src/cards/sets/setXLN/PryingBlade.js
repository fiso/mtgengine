"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PryingBlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Prying Blade", "Ixalan", "XLN");
  }
}

module.exports = PryingBlade;
