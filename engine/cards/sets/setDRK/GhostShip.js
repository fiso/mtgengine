"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostShipBase = require("../set4ED/GhostShip.js");

class GhostShip extends GhostShipBase {
  constructor(game) {
    super(game, "Ghost Ship", "The Dark", "DRK");
  }
}

module.exports = GhostShip;
