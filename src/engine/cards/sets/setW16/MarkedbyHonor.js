"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkedbyHonor extends UnimplementedCard {
  constructor (game) {
    super(game, "Marked by Honor", "Welcome Deck 2016", "W16");
  }
}

module.exports = MarkedbyHonor;
