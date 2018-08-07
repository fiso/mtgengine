"use strict";
const Constants = require ("../../../Constants");
const AvenFisherBase = require("../set10E/AvenFisher");

class AvenFisher extends AvenFisherBase {
  constructor (game) {
    super(game, "Aven Fisher", "Ninth Edition", "9ED");
  }
}

module.exports = AvenFisher;
