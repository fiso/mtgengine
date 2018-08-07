"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToothandClaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Tooth and Claw", "Eternal Masters", "EMA");
  }
}

module.exports = ToothandClaw;
