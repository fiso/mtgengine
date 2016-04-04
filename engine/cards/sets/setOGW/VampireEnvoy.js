"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampireEnvoy extends Card {
  constructor(game) {
    super(game, "Vampire Envoy", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = VampireEnvoy;
