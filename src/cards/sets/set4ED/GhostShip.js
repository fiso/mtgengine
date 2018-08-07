"use strict";
const Constants = require ("../../../Constants");
const GhostShipBase = require("../setA25/GhostShip");

class GhostShip extends GhostShipBase {
  constructor (game) {
    super(game, "Ghost Ship", "Fourth Edition", "4ED");
  }
}

module.exports = GhostShip;
