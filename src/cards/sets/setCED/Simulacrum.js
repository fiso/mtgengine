"use strict";
const Constants = require ("../../../Constants");
const SimulacrumBase = require("../set4ED/Simulacrum");

class Simulacrum extends SimulacrumBase {
  constructor (game) {
    super(game, "Simulacrum", "Collectors’ Edition", "CED");
  }
}

module.exports = Simulacrum;
