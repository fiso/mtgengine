"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacetheMindSculptor extends UnimplementedCard {
  constructor(game) {
    super(game, "Jace, the Mind Sculptor", "From the Vault: Twenty", "V13");
  }
}

module.exports = JacetheMindSculptor;
