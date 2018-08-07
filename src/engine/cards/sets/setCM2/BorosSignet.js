"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosSignet extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Signet", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BorosSignet;
