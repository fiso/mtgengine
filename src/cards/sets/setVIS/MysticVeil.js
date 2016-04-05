"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticVeil extends UnimplementedCard {
  constructor(game) {
    super(game, "Mystic Veil", "Visions", "VIS");
  }
}

module.exports = MysticVeil;
