"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DreamStalkerBase = require("../setDDM/DreamStalker.js");

class DreamStalker extends DreamStalkerBase {
  constructor(game) {
    super(game, "Dream Stalker", "Time Spiral", "TSP");
  }
}

module.exports = DreamStalker;
