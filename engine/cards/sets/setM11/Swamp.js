"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwampBase = require("../setATH/Swamp.js");

class Swamp extends SwampBase {
  constructor(game) {
    super(game, "Swamp", "Magic 2011", "M11");
  }
}

module.exports = Swamp;
