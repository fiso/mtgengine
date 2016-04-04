"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RousetheMob extends UnimplementedCard {
  constructor(game) {
    super(game, "Rouse the Mob", "Journey into Nyx", "JOU");
  }
}

module.exports = RousetheMob;
