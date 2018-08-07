"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathWard extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Ward", "Masters Edition", "MED");
  }
}

module.exports = DeathWard;
