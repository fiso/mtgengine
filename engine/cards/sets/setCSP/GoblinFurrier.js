"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinFurrier extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Furrier", "Coldsnap", "CSP");
  }
}

module.exports = GoblinFurrier;
