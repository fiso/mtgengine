"use strict";
const Constants = require ("../../../Constants");
const FloodBase = require("../setPZ2/Flood");

class Flood extends FloodBase {
  constructor (game) {
    super(game, "Flood", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Flood;
