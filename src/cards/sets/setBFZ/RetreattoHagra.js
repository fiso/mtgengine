"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RetreattoHagra extends UnimplementedCard {
  constructor(game) {
    super(game, "Retreat to Hagra", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RetreattoHagra;
