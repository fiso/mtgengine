"use strict";
const Constants = require ("../../../Constants");
const AethermagesTouchBase = require("../setC18/AethermagesTouch");

class AethermagesTouch extends AethermagesTouchBase {
  constructor (game) {
    super(game, "Aethermage's Touch", "Commander Anthology", "CMA");
  }
}

module.exports = AethermagesTouch;
