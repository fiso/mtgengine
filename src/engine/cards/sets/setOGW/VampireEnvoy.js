"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireEnvoy extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Envoy", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = VampireEnvoy;
