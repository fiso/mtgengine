"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogRaiders extends UnimplementedCard {
  constructor (game) {
    super(game, "Bog Raiders", "Magic 2011", "M11");
  }
}

module.exports = BogRaiders;
