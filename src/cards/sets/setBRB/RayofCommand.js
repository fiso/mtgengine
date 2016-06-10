"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RayofCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Ray of Command", "Battle Royale Box Set", "BRB");
  }
}

module.exports = RayofCommand;
