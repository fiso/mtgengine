"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherShockwave extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Shockwave", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = AetherShockwave;
