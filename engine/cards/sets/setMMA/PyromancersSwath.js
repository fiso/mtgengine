"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyromancersSwathBase = require("../setFUT/PyromancersSwath.js");

class PyromancersSwath extends PyromancersSwathBase {
  constructor(game) {
    super(game, "Pyromancer's Swath", "Modern Masters", "MMA");
  }
}

module.exports = PyromancersSwath;
