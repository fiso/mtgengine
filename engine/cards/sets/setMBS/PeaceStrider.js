"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PeaceStriderBase = require("../setCNS/PeaceStrider.js");

class PeaceStrider extends PeaceStriderBase {
  constructor(game) {
    super(game, "Peace Strider", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PeaceStrider;
