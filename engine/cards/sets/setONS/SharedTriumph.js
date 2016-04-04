"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SharedTriumph extends Card {
  constructor(game) {
    super(game, "Shared Triumph", "Onslaught", "ONS");
  }
}

module.exports = SharedTriumph;
