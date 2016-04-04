"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurrakarMarauder extends Card {
  constructor(game) {
    super(game, "Surrakar Marauder", "Zendikar", "ZEN");
  }
}

module.exports = SurrakarMarauder;
