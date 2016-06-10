"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquanderedResources extends UnimplementedCard {
  constructor (game) {
    super(game, "Squandered Resources", "Visions", "VIS");
  }
}

module.exports = SquanderedResources;
