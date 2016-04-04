"use strict";
const Constants = require ("../../../Constants");
const PacifismBase = require("../setATH/Pacifism");

class Pacifism extends PacifismBase {
  constructor(game) {
    super(game, "Pacifism", "Ninth Edition", "9ED");
  }
}

module.exports = Pacifism;
