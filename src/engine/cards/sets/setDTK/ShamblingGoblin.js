"use strict";
const Constants = require ("../../../Constants");
const ShamblingGoblinBase = require("../setCN2/ShamblingGoblin");

class ShamblingGoblin extends ShamblingGoblinBase {
  constructor (game) {
    super(game, "Shambling Goblin", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ShamblingGoblin;
