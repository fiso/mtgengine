"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToothandClaw extends UnimplementedCard {
  constructor(game) {
    super(game, "Tooth and Claw", "Commander 2013 Edition", "C13");
  }
}

module.exports = ToothandClaw;
