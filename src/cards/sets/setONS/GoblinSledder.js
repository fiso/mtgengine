"use strict";
const Constants = require ("../../../Constants");
const GoblinSledderBase = require("../setDD3_EVG/GoblinSledder");

class GoblinSledder extends GoblinSledderBase {
  constructor (game) {
    super(game, "Goblin Sledder", "Onslaught", "ONS");
  }
}

module.exports = GoblinSledder;
