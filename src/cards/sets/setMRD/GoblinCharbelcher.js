"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinCharbelcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Charbelcher", "Mirrodin", "MRD");
  }
}

module.exports = GoblinCharbelcher;
