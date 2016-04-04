"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ToweringBaloth extends Card {
  constructor(game) {
    super(game, "Towering Baloth", "Onslaught", "ONS");
  }
}

module.exports = ToweringBaloth;
