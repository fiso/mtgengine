"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReclusiveArtificer extends UnimplementedCard {
  constructor (game) {
    super(game, "Reclusive Artificer", "Magic Origins", "ORI");
  }
}

module.exports = ReclusiveArtificer;
