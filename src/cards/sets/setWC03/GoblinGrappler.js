"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGrappler extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Grappler", "World Championship Decks 2003", "WC03");
  }
}

module.exports = GoblinGrappler;
