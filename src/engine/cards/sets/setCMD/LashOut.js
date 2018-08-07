"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LashOut extends UnimplementedCard {
  constructor (game) {
    super(game, "Lash Out", "Commander 2011", "CMD");
  }
}

module.exports = LashOut;
