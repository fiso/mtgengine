"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Serf extends UnimplementedCard {
  constructor (game) {
    super(game, "Serf", "Eternal Masters Tokens", "TEMA");
  }
}

module.exports = Serf;
