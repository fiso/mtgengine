"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalothWoodcrasher extends UnimplementedCard {
  constructor (game) {
    super(game, "Baloth Woodcrasher", "Commander 2013 Edition", "C13");
  }
}

module.exports = BalothWoodcrasher;
