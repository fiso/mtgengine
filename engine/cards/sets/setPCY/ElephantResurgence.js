"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElephantResurgence extends Card {
  constructor(game) {
    super(game, "Elephant Resurgence", "Prophecy", "PCY");
  }
}

module.exports = ElephantResurgence;
