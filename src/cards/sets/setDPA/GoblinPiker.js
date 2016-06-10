"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinPiker extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Piker", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = GoblinPiker;
