"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommandersSphere extends UnimplementedCard {
  constructor (game) {
    super(game, "Commander's Sphere", "Commander 2018", "C18");
  }
}

module.exports = CommandersSphere;
