"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InnerChamberGuard extends Card {
  constructor(game) {
    super(game, "Inner-Chamber Guard", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = InnerChamberGuard;
