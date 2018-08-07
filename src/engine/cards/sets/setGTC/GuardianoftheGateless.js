"use strict";
const Constants = require ("../../../Constants");
const GuardianoftheGatelessBase = require("../setCN2/GuardianoftheGateless");

class GuardianoftheGateless extends GuardianoftheGatelessBase {
  constructor (game) {
    super(game, "Guardian of the Gateless", "Gatecrash", "GTC");
  }
}

module.exports = GuardianoftheGateless;
