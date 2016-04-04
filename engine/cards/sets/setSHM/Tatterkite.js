"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tatterkite extends Card {
  constructor(game) {
    super(game, "Tatterkite", "Shadowmoor", "SHM");
  }
}

module.exports = Tatterkite;
