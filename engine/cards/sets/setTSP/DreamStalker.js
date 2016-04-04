"use strict";
const Constants = require ("../../../Constants");
const DreamStalkerBase = require("../setDDM/DreamStalker");

class DreamStalker extends DreamStalkerBase {
  constructor(game) {
    super(game, "Dream Stalker", "Time Spiral", "TSP");
  }
}

module.exports = DreamStalker;
