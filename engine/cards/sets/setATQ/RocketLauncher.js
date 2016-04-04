"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RocketLauncher extends Card {
  constructor(game) {
    super(game, "Rocket Launcher", "Antiquities", "ATQ");
  }
}

module.exports = RocketLauncher;
