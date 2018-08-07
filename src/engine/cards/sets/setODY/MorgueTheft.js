"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MorgueTheft extends UnimplementedCard {
  constructor (game) {
    super(game, "Morgue Theft", "Odyssey", "ODY");
  }
}

module.exports = MorgueTheft;
