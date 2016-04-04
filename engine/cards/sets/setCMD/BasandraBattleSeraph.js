"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasandraBattleSeraph extends UnimplementedCard {
  constructor(game) {
    super(game, "Basandra, Battle Seraph", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BasandraBattleSeraph;
