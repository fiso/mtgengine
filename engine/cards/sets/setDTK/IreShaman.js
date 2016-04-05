"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IreShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Ire Shaman", "Dragons of Tarkir", "DTK");
  }
}

module.exports = IreShaman;
