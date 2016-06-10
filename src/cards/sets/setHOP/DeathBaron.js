"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathBaron extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Baron", "Planechase", "HOP");
  }
}

module.exports = DeathBaron;
