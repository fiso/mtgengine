"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcceptableLosses extends UnimplementedCard {
  constructor (game) {
    super(game, "Acceptable Losses", "Odyssey", "ODY");
  }
}

module.exports = AcceptableLosses;
