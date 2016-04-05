"use strict";
const Constants = require ("../../../Constants");
const ExplorersScopeBase = require("../setDDP/ExplorersScope");

class ExplorersScope extends ExplorersScopeBase {
  constructor(game) {
    super(game, "Explorer's Scope", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ExplorersScope;
