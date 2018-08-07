"use strict";
const Constants = require ("../../../Constants");
const GhostShipBase = require("../setA25/GhostShip");

class GhostShip extends GhostShipBase {
  constructor (game) {
    super(game, "Ghost Ship", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = GhostShip;
