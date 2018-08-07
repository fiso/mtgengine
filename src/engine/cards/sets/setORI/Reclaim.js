"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reclaim extends UnimplementedCard {
  constructor (game) {
    super(game, "Reclaim", "Magic Origins", "ORI");
  }
}

module.exports = Reclaim;
