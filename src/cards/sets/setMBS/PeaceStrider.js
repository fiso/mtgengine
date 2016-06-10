"use strict";
const Constants = require ("../../../Constants");
const PeaceStriderBase = require("../setCNS/PeaceStrider");

class PeaceStrider extends PeaceStriderBase {
  constructor (game) {
    super(game, "Peace Strider", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PeaceStrider;
