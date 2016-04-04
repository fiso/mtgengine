"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantCrabBase = require("../setBTD/GiantCrab.js");

class GiantCrab extends GiantCrabBase {
  constructor(game) {
    super(game, "Giant Crab", "Tempest", "TMP");
  }
}

module.exports = GiantCrab;
