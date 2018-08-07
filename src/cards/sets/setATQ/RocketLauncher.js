"use strict";
const Constants = require ("../../../Constants");
const RocketLauncherBase = require("../setSUM/RocketLauncher");

class RocketLauncher extends RocketLauncherBase {
  constructor (game) {
    super(game, "Rocket Launcher", "Antiquities", "ATQ");
  }
}

module.exports = RocketLauncher;
