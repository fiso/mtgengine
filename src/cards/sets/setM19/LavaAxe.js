"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaAxe extends UnimplementedCard {
  constructor (game) {
    super(game, "Lava Axe", "Core Set 2019", "M19");
  }
}

module.exports = LavaAxe;
