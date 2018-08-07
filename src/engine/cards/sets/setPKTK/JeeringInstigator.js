"use strict";
const Constants = require ("../../../Constants");
const JeeringInstigatorBase = require("../setUGIN/JeeringInstigator");

class JeeringInstigator extends JeeringInstigatorBase {
  constructor (game) {
    super(game, "Jeering Instigator", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = JeeringInstigator;
