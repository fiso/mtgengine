"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrumblingNecropolis extends UnimplementedCard {
  constructor (game) {
    super(game, "Crumbling Necropolis", "Explorers of Ixalan", "E02");
  }
}

module.exports = CrumblingNecropolis;
