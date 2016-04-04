"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SheerDrop extends Card {
  constructor(game) {
    super(game, "Sheer Drop", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SheerDrop;
