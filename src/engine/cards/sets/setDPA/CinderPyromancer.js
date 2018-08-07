"use strict";
const Constants = require ("../../../Constants");
const CinderPyromancerBase = require("../setPD2/CinderPyromancer");

class CinderPyromancer extends CinderPyromancerBase {
  constructor (game) {
    super(game, "Cinder Pyromancer", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = CinderPyromancer;
