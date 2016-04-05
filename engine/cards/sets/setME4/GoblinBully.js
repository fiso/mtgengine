"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBully extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Bully", "Masters Edition IV", "ME4");
  }
}

module.exports = GoblinBully;
