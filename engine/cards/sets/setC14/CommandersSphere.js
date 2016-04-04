"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommandersSphere extends UnimplementedCard {
  constructor(game) {
    super(game, "Commander's Sphere", "Commander 2014", "C14");
  }
}

module.exports = CommandersSphere;
