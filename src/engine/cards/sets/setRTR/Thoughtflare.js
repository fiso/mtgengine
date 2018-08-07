"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thoughtflare extends UnimplementedCard {
  constructor (game) {
    super(game, "Thoughtflare", "Return to Ravnica", "RTR");
  }
}

module.exports = Thoughtflare;
