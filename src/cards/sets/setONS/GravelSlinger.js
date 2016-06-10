"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GravelSlinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Gravel Slinger", "Onslaught", "ONS");
  }
}

module.exports = GravelSlinger;
