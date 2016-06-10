"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RocketLauncher extends UnimplementedCard {
  constructor (game) {
    super(game, "Rocket Launcher", "Antiquities", "ATQ");
  }
}

module.exports = RocketLauncher;
