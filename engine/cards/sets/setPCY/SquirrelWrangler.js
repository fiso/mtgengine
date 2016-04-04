"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SquirrelWrangler extends Card {
  constructor(game) {
    super(game, "Squirrel Wrangler", "Prophecy", "PCY");
  }
}

module.exports = SquirrelWrangler;
