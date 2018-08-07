"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBombardment extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Bombardment", "Tempest Remastered", "TPR");
  }
}

module.exports = GoblinBombardment;
