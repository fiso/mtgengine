"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrowthSpurt extends Card {
  constructor(game) {
    super(game, "Growth Spurt", "Unglued", "UGL");
  }
}

module.exports = GrowthSpurt;
