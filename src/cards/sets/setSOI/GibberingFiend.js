"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GibberingFiend extends UnimplementedCard {
  constructor (game) {
    super(game, "Gibbering Fiend", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GibberingFiend;
