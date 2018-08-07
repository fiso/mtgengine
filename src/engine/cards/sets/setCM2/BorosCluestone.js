"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosCluestone extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Cluestone", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BorosCluestone;
