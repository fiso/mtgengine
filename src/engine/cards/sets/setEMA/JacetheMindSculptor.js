"use strict";
const Constants = require ("../../../Constants");
const JacetheMindSculptorBase = require("../setA25/JacetheMindSculptor");

class JacetheMindSculptor extends JacetheMindSculptorBase {
  constructor (game) {
    super(game, "Jace, the Mind Sculptor", "Eternal Masters", "EMA");
  }
}

module.exports = JacetheMindSculptor;
