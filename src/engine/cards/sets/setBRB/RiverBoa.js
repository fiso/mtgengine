"use strict";
const Constants = require ("../../../Constants");
const RiverBoaBase = require("../setDDM/RiverBoa");

class RiverBoa extends RiverBoaBase {
  constructor (game) {
    super(game, "River Boa", "Battle Royale Box Set", "BRB");
  }
}

module.exports = RiverBoa;
