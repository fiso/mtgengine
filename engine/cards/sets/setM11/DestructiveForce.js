"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DestructiveForce extends Card {
  constructor(game) {
    super(game, "Destructive Force", "Magic 2011", "M11");
  }
}

module.exports = DestructiveForce;
