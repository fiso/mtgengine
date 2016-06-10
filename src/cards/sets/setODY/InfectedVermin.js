"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfectedVermin extends UnimplementedCard {
  constructor (game) {
    super(game, "Infected Vermin", "Odyssey", "ODY");
  }
}

module.exports = InfectedVermin;
