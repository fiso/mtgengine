"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Assault", "Shards of Alara", "ALA");
  }
}

module.exports = GoblinAssault;
