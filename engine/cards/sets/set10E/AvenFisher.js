"use strict";
const Constants = require ("../../../Constants");
const AvenFisherBase = require("../set8ED/AvenFisher");

class AvenFisher extends AvenFisherBase {
  constructor(game) {
    super(game, "Aven Fisher", "Tenth Edition", "10E");
  }
}

module.exports = AvenFisher;
