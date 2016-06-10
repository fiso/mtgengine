"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinTaskmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Taskmaster", "Onslaught", "ONS");
  }
}

module.exports = GoblinTaskmaster;
