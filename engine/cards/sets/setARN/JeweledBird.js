"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeweledBird extends UnimplementedCard {
  constructor(game) {
    super(game, "Jeweled Bird", "Arabian Nights", "ARN");
  }
}

module.exports = JeweledBird;
