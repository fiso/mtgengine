"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SquanderedResources extends Card {
  constructor(game) {
    super(game, "Squandered Resources", "Visions", "VIS");
  }
}

module.exports = SquanderedResources;
