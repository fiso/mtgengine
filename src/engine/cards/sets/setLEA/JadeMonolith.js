"use strict";
const Constants = require ("../../../Constants");
const JadeMonolithBase = require("../setME4/JadeMonolith");

class JadeMonolith extends JadeMonolithBase {
  constructor (game) {
    super(game, "Jade Monolith", "Limited Edition Alpha", "LEA");
  }
}

module.exports = JadeMonolith;
