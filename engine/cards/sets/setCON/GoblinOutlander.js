"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinOutlander extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Outlander", "Conflux", "CON");
  }
}

module.exports = GoblinOutlander;
