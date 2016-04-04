"use strict";
const Constants = require ("../../../Constants");
const CloudDragonBase = require("../setME4/CloudDragon");

class CloudDragon extends CloudDragonBase {
  constructor(game) {
    super(game, "Cloud Dragon", "Portal", "POR");
  }
}

module.exports = CloudDragon;
