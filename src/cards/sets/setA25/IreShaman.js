"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IreShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Ire Shaman", "Masters 25", "A25");
  }
}

module.exports = IreShaman;
