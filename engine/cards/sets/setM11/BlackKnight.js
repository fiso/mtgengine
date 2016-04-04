"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlackKnightBase = require("../setATH/BlackKnight.js");

class BlackKnight extends BlackKnightBase {
  constructor(game) {
    super(game, "Black Knight", "Magic 2011", "M11");
  }
}

module.exports = BlackKnight;
