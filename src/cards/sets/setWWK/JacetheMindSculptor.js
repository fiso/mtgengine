"use strict";
const Constants = require ("../../../Constants");
const JacetheMindSculptorBase = require("../setV13/JacetheMindSculptor");

class JacetheMindSculptor extends JacetheMindSculptorBase {
  constructor(game) {
    super(game, "Jace, the Mind Sculptor", "Worldwake", "WWK");
  }
}

module.exports = JacetheMindSculptor;
