"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathWard extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Ward", "Collector's Edition", "CED");
  }
}

module.exports = DeathWard;
