"use strict";
const Constants = require ("../../../Constants");
const GiantCrabBase = require("../setBTD/GiantCrab");

class GiantCrab extends GiantCrabBase {
  constructor(game) {
    super(game, "Giant Crab", "Tempest", "TMP");
  }
}

module.exports = GiantCrab;
