"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinChariot extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Chariot", "Eighth Edition", "8ED");
  }
}

module.exports = GoblinChariot;
