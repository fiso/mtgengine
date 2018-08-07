"use strict";
const Constants = require ("../../../Constants");
const AncientCrabBase = require("../setAKH/AncientCrab");

class AncientCrab extends AncientCrabBase {
  constructor (game) {
    super(game, "Ancient Crab", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = AncientCrab;
