"use strict";
const Constants = require ("../../../Constants");
const GoblinSledderBase = require("../setEVG/GoblinSledder");

class GoblinSledder extends GoblinSledderBase {
  constructor (game) {
    super(game, "Goblin Sledder", "Onslaught", "ONS");
  }
}

module.exports = GoblinSledder;
