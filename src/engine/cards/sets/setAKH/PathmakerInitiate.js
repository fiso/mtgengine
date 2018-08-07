"use strict";
const Constants = require ("../../../Constants");
const PathmakerInitiateBase = require("../setBBD/PathmakerInitiate");

class PathmakerInitiate extends PathmakerInitiateBase {
  constructor (game) {
    super(game, "Pathmaker Initiate", "Amonkhet", "AKH");
  }
}

module.exports = PathmakerInitiate;
