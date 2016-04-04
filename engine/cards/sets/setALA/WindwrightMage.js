"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindwrightMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Windwright Mage", "Shards of Alara", "ALA");
  }
}

module.exports = WindwrightMage;
