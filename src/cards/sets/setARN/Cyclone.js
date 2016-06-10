"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cyclone extends UnimplementedCard {
  constructor (game) {
    super(game, "Cyclone", "Arabian Nights", "ARN");
  }
}

module.exports = Cyclone;
