"use strict";
const Constants = require ("../../../Constants");
const RepentantBlacksmithBase = require("../set5ED/RepentantBlacksmith");

class RepentantBlacksmith extends RepentantBlacksmithBase {
  constructor (game) {
    super(game, "Repentant Blacksmith", "Arabian Nights", "ARN");
  }
}

module.exports = RepentantBlacksmith;
