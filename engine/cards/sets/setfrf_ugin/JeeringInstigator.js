"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JeeringInstigatorBase = require("../setKTK/JeeringInstigator.js");

class JeeringInstigator extends JeeringInstigatorBase {
  constructor(game) {
    super(game, "Jeering Instigator", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = JeeringInstigator;
