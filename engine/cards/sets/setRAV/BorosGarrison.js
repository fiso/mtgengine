"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorosGarrisonBase = require("../setC13/BorosGarrison.js");

class BorosGarrison extends BorosGarrisonBase {
  constructor(game) {
    super(game, "Boros Garrison", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BorosGarrison;
