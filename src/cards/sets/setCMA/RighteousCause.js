"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RighteousCause extends UnimplementedCard {
  constructor (game) {
    super(game, "Righteous Cause", "Commander Anthology", "CMA");
  }
}

module.exports = RighteousCause;
