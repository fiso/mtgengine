"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flameshot extends Card {
  constructor(game) {
    super(game, "Flameshot", "Prophecy", "PCY");
  }
}

module.exports = Flameshot;
