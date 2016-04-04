"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RepentantBlacksmithBase = require("../setARN/RepentantBlacksmith.js");

class RepentantBlacksmith extends RepentantBlacksmithBase {
  constructor(game) {
    super(game, "Repentant Blacksmith", "Chronicles", "CHR");
  }
}

module.exports = RepentantBlacksmith;
