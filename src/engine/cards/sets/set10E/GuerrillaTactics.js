"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuerrillaTactics extends UnimplementedCard {
  constructor (game) {
    super(game, "Guerrilla Tactics", "Tenth Edition", "10E");
  }
}

module.exports = GuerrillaTactics;
