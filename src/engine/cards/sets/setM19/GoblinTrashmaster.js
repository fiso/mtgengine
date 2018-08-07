"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinTrashmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Trashmaster", "Core Set 2019", "M19");
  }
}

module.exports = GoblinTrashmaster;
