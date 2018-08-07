"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VerdantConfluence extends UnimplementedCard {
  constructor (game) {
    super(game, "Verdant Confluence", "Legendary Cube", "PZ1");
  }
}

module.exports = VerdantConfluence;
