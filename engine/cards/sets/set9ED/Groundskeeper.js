"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GroundskeeperBase = require("../setMMQ/Groundskeeper.js");

class Groundskeeper extends GroundskeeperBase {
  constructor(game) {
    super(game, "Groundskeeper", "Ninth Edition", "9ED");
  }
}

module.exports = Groundskeeper;
