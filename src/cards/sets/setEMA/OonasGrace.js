"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OonasGrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Oona's Grace", "Eternal Masters", "EMA");
  }
}

module.exports = OonasGrace;
