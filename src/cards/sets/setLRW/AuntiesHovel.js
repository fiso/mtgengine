"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuntiesHovel extends UnimplementedCard {
  constructor (game) {
    super(game, "Auntie's Hovel", "Lorwyn", "LRW");
  }
}

module.exports = AuntiesHovel;
