"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoobyTrap extends UnimplementedCard {
  constructor(game) {
    super(game, "Booby Trap", "Ninth Edition", "9ED");
  }
}

module.exports = BoobyTrap;
