"use strict";
const Constants = require ("../../../Constants");
const AvenFisherBase = require("../set10E/AvenFisher");

class AvenFisher extends AvenFisherBase {
  constructor (game) {
    super(game, "Aven Fisher", "Odyssey", "ODY");
  }
}

module.exports = AvenFisher;
