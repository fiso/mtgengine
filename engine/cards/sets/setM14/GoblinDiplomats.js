"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinDiplomats extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Diplomats", "Magic 2014 Core Set", "M14");
  }
}

module.exports = GoblinDiplomats;
