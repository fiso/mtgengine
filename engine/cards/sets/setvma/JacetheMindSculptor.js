"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JacetheMindSculptorBase = require("../setV13/JacetheMindSculptor.js");

class JacetheMindSculptor extends JacetheMindSculptorBase {
  constructor(game) {
    super(game, "Jace, the Mind Sculptor", "Vintage Masters", "VMA");
  }
}

module.exports = JacetheMindSculptor;
