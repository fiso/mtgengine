"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElephantGraveyard extends UnimplementedCard {
  constructor (game) {
    super(game, "Elephant Graveyard", "Masters Edition IV", "ME4");
  }
}

module.exports = ElephantGraveyard;
