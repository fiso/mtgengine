"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Kjeldoran Warrior", "Ice Age", "ICE");
  }
}

module.exports = KjeldoranWarrior;
