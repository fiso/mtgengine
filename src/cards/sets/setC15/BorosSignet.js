"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosSignet extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Signet", "Commander 2015", "C15");
  }
}

module.exports = BorosSignet;
