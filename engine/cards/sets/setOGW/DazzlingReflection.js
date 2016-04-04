"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DazzlingReflection extends Card {
  constructor(game) {
    super(game, "Dazzling Reflection", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = DazzlingReflection;
