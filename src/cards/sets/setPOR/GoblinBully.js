"use strict";
const Constants = require ("../../../Constants");
const GoblinBullyBase = require("../setME4/GoblinBully");

class GoblinBully extends GoblinBullyBase {
  constructor(game) {
    super(game, "Goblin Bully", "Portal", "POR");
  }
}

module.exports = GoblinBully;
