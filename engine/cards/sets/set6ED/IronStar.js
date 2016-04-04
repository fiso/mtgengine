"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IronStar extends Card {
  constructor(game) {
    super(game, "Iron Star", "Classic Sixth Edition", "6ED");
  }
}

module.exports = IronStar;
