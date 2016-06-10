"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvariciousDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Avaricious Dragon", "Magic Origins", "ORI");
  }
}

module.exports = AvariciousDragon;
