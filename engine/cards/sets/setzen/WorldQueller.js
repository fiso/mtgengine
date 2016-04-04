"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WorldQueller extends Card {
  constructor(game) {
    super(game, "World Queller", "Zendikar", "ZEN");
  }
}

module.exports = WorldQueller;
