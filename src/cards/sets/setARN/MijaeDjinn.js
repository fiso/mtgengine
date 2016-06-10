"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MijaeDjinn extends UnimplementedCard {
  constructor (game) {
    super(game, "Mijae Djinn", "Arabian Nights", "ARN");
  }
}

module.exports = MijaeDjinn;
