"use strict";
const Constants = require ("../../../Constants");
const WindsofRathBase = require("../setDDL/WindsofRath");

class WindsofRath extends WindsofRathBase {
  constructor(game) {
    super(game, "Winds of Rath", "Tempest Remastered", "TPR");
  }
}

module.exports = WindsofRath;
