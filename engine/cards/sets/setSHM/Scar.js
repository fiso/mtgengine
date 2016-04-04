"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scar extends Card {
  constructor(game) {
    super(game, "Scar", "Shadowmoor", "SHM");
  }
}

module.exports = Scar;
