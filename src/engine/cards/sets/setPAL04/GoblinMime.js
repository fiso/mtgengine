"use strict";
const Constants = require ("../../../Constants");
const GoblinMimeBase = require("../setUNH/GoblinMime");

class GoblinMime extends GoblinMimeBase {
  constructor (game) {
    super(game, "Goblin Mime", "Arena League 2004", "PAL04");
  }
}

module.exports = GoblinMime;
