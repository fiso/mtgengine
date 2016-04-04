"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GroundskeeperBase = require("../setMMQ/Groundskeeper.js");

class Groundskeeper extends GroundskeeperBase {
  constructor(game) {
    super(game, "Groundskeeper", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Groundskeeper;
