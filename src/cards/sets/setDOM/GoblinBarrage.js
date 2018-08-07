"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBarrage extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Barrage", "Dominaria", "DOM");
  }
}

module.exports = GoblinBarrage;
