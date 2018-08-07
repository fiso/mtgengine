"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveyardBusybody extends UnimplementedCard {
  constructor (game) {
    super(game, "Graveyard Busybody", "Unstable", "UST");
  }
}

module.exports = GraveyardBusybody;
