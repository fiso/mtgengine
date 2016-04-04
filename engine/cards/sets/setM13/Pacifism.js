"use strict";
const Constants = require ("../../../Constants");
const PacifismBase = require("../setATH/Pacifism");

class Pacifism extends PacifismBase {
  constructor(game) {
    super(game, "Pacifism", "Magic 2013", "M13");
  }
}

module.exports = Pacifism;
