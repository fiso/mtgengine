"use strict";
const Constants = require ("../../../Constants");
const PacifismBase = require("../setBBD/Pacifism");

class Pacifism extends PacifismBase {
  constructor (game) {
    super(game, "Pacifism", "Magic 2010", "M10");
  }
}

module.exports = Pacifism;
