"use strict";
const Constants = require ("../../../Constants");
const ProdigalPyromancerBase = require("../setIMA/ProdigalPyromancer");

class ProdigalPyromancer extends ProdigalPyromancerBase {
  constructor (game) {
    super(game, "Prodigal Pyromancer", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ProdigalPyromancer;
