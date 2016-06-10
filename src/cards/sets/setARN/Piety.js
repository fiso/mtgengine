"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Piety extends UnimplementedCard {
  constructor (game) {
    super(game, "Piety", "Arabian Nights", "ARN");
  }
}

module.exports = Piety;
