"use strict";
const Constants = require ("../../../Constants");
const PacifismBase = require("../setATH/Pacifism");

class Pacifism extends PacifismBase {
  constructor(game) {
    super(game, "Pacifism", "Tenth Edition", "10E");
  }
}

module.exports = Pacifism;
