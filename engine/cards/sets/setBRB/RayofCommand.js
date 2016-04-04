"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RayofCommand extends Card {
  constructor(game) {
    super(game, "Ray of Command", "Battle Royale Box Set", "BRB");
  }
}

module.exports = RayofCommand;
