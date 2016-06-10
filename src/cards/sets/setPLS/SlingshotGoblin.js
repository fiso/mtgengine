"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlingshotGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Slingshot Goblin", "Planeshift", "PLS");
  }
}

module.exports = SlingshotGoblin;
