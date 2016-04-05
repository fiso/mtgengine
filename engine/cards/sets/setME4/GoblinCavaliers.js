"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinCavaliers extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Cavaliers", "Masters Edition IV", "ME4");
  }
}

module.exports = GoblinCavaliers;
