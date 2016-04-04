"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sandstorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Sandstorm", "Arabian Nights", "ARN");
  }
}

module.exports = Sandstorm;
