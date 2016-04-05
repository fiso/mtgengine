"use strict";
const Constants = require ("../../../Constants");
const RepentantBlacksmithBase = require("../setARN/RepentantBlacksmith");

class RepentantBlacksmith extends RepentantBlacksmithBase {
  constructor(game) {
    super(game, "Repentant Blacksmith", "Chronicles", "CHR");
  }
}

module.exports = RepentantBlacksmith;
