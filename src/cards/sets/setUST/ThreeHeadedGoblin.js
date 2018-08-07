"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThreeHeadedGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Three-Headed Goblin", "Unstable", "UST");
  }
}

module.exports = ThreeHeadedGoblin;
