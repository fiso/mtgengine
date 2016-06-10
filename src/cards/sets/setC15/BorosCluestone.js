"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosCluestone extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Cluestone", "Commander 2015", "C15");
  }
}

module.exports = BorosCluestone;
