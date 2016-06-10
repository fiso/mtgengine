"use strict";
const Constants = require ("../../../Constants");
const PacifismBase = require("../setATH/Pacifism");

class Pacifism extends PacifismBase {
  constructor (game) {
    super(game, "Pacifism", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Pacifism;
