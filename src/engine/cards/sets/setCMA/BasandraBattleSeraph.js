"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasandraBattleSeraph extends UnimplementedCard {
  constructor (game) {
    super(game, "Basandra, Battle Seraph", "Commander Anthology", "CMA");
  }
}

module.exports = BasandraBattleSeraph;
