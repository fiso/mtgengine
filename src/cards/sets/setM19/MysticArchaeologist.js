"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticArchaeologist extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Archaeologist", "Core Set 2019", "M19");
  }
}

module.exports = MysticArchaeologist;
