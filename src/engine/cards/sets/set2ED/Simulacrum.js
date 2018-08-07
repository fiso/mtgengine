"use strict";
const Constants = require ("../../../Constants");
const SimulacrumBase = require("../set4ED/Simulacrum");

class Simulacrum extends SimulacrumBase {
  constructor (game) {
    super(game, "Simulacrum", "Unlimited Edition", "2ED");
  }
}

module.exports = Simulacrum;
