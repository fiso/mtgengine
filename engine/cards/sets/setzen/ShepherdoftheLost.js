"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShepherdoftheLost extends Card {
  constructor(game) {
    super(game, "Shepherd of the Lost", "Zendikar", "ZEN");
  }
}

module.exports = ShepherdoftheLost;
