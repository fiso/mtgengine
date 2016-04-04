"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Valleymaker extends Card {
  constructor(game) {
    super(game, "Valleymaker", "Shadowmoor", "SHM");
  }
}

module.exports = Valleymaker;
