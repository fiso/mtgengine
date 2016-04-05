"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sindbad extends UnimplementedCard {
  constructor(game) {
    super(game, "Sindbad", "Arabian Nights", "ARN");
  }
}

module.exports = Sindbad;
