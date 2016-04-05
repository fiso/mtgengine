"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveyardShovel extends UnimplementedCard {
  constructor(game) {
    super(game, "Graveyard Shovel", "Innistrad", "ISD");
  }
}

module.exports = GraveyardShovel;
