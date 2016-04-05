"use strict";
const Constants = require ("../../../Constants");
const JeeringInstigatorBase = require("../setKTK/JeeringInstigator");

class JeeringInstigator extends JeeringInstigatorBase {
  constructor(game) {
    super(game, "Jeering Instigator", "Prerelease Events", "pPRE");
  }
}

module.exports = JeeringInstigator;
