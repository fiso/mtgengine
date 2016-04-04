"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UtopiaTree extends Card {
  constructor(game) {
    super(game, "Utopia Tree", "Invasion", "INV");
  }
}

module.exports = UtopiaTree;
