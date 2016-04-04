"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElephantGraveyard extends UnimplementedCard {
  constructor(game) {
    super(game, "Elephant Graveyard", "Arabian Nights", "ARN");
  }
}

module.exports = ElephantGraveyard;
