"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlingshotGoblin extends Card {
  constructor(game) {
    super(game, "Slingshot Goblin", "Planeshift", "PLS");
  }
}

module.exports = SlingshotGoblin;
