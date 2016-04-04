"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CommandersSphere extends Card {
  constructor(game) {
    super(game, "Commander's Sphere", "Commander 2014", "C14");
  }
}

module.exports = CommandersSphere;
