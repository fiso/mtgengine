"use strict";
const Constants = require ("../../../Constants");
const RocketLauncherBase = require("../setATQ/RocketLauncher");

class RocketLauncher extends RocketLauncherBase {
  constructor(game) {
    super(game, "Rocket Launcher", "Revised Edition", "3ED");
  }
}

module.exports = RocketLauncher;
