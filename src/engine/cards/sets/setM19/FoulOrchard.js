"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoulOrchard extends UnimplementedCard {
  constructor (game) {
    super(game, "Foul Orchard", "Core Set 2019", "M19");
  }
}

module.exports = FoulOrchard;
