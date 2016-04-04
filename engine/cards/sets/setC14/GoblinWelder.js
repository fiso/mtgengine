"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWelder extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Welder", "Commander 2014", "C14");
  }
}

module.exports = GoblinWelder;
