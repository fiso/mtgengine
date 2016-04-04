"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForestBear extends Card {
  constructor(game) {
    super(game, "Forest Bear", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ForestBear;
