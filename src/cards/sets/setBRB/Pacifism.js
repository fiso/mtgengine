"use strict";
const Constants = require ("../../../Constants");
const PacifismBase = require("../setATH/Pacifism");

class Pacifism extends PacifismBase {
  constructor (game) {
    super(game, "Pacifism", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Pacifism;
