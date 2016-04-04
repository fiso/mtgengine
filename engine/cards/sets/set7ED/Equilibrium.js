"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EquilibriumBase = require("../setEXO/Equilibrium.js");

class Equilibrium extends EquilibriumBase {
  constructor(game) {
    super(game, "Equilibrium", "Seventh Edition", "7ED");
  }
}

module.exports = Equilibrium;
