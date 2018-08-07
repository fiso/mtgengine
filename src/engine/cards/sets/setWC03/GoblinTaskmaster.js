"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinTaskmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Taskmaster", "World Championship Decks 2003", "WC03");
  }
}

module.exports = GoblinTaskmaster;
