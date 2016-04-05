"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherShockwave extends UnimplementedCard {
  constructor(game) {
    super(game, "Æther Shockwave", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = AetherShockwave;
