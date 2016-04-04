"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvenFisherBase = require("../set8ED/AvenFisher.js");

class AvenFisher extends AvenFisherBase {
  constructor(game) {
    super(game, "Aven Fisher", "Odyssey", "ODY");
  }
}

module.exports = AvenFisher;
