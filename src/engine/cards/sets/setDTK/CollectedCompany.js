"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CollectedCompany extends UnimplementedCard {
  constructor (game) {
    super(game, "Collected Company", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CollectedCompany;
