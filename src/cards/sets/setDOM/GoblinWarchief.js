"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWarchief extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Warchief", "Dominaria", "DOM");
  }
}

module.exports = GoblinWarchief;
