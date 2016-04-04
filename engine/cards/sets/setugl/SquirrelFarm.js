"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SquirrelFarm extends Card {
  constructor(game) {
    super(game, "Squirrel Farm", "Unglued", "UGL");
  }
}

module.exports = SquirrelFarm;
