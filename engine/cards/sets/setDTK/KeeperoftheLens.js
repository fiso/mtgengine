"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeeperoftheLens extends Card {
  constructor(game) {
    super(game, "Keeper of the Lens", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KeeperoftheLens;
