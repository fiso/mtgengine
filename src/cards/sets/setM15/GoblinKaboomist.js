"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinKaboomist extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Kaboomist", "Magic 2015 Core Set", "M15");
  }
}

module.exports = GoblinKaboomist;
