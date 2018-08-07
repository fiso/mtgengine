"use strict";
const Constants = require ("../../../Constants");
const PathofDiscoveryBase = require("../setPRIX/PathofDiscovery");

class PathofDiscovery extends PathofDiscoveryBase {
  constructor (game) {
    super(game, "Path of Discovery", "Rivals of Ixalan", "RIX");
  }
}

module.exports = PathofDiscovery;
