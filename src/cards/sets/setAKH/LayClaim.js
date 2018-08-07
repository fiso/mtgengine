"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LayClaim extends UnimplementedCard {
  constructor (game) {
    super(game, "Lay Claim", "Amonkhet", "AKH");
  }
}

module.exports = LayClaim;
