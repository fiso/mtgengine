"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheFlameofKeld extends UnimplementedCard {
  constructor (game) {
    super(game, "The Flame of Keld", "Dominaria", "DOM");
  }
}

module.exports = TheFlameofKeld;
