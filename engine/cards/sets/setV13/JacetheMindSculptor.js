"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JacetheMindSculptor extends Card {
  constructor(game) {
    super(game, "Jace, the Mind Sculptor", "From the Vault: Twenty", "V13");
  }
}

module.exports = JacetheMindSculptor;
