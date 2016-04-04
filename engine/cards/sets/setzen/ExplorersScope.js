"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExplorersScopeBase = require("../setDDP/ExplorersScope.js");

class ExplorersScope extends ExplorersScopeBase {
  constructor(game) {
    super(game, "Explorer's Scope", "Zendikar", "ZEN");
  }
}

module.exports = ExplorersScope;
