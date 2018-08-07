"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinChariot extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Chariot", "Ninth Edition", "9ED");
  }
}

module.exports = GoblinChariot;
