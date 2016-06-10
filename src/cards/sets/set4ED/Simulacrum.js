"use strict";
const Constants = require ("../../../Constants");
const SimulacrumBase = require("../setCED/Simulacrum");

class Simulacrum extends SimulacrumBase {
  constructor (game) {
    super(game, "Simulacrum", "Fourth Edition", "4ED");
  }
}

module.exports = Simulacrum;
