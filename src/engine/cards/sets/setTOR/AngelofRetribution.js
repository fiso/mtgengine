"use strict";
const Constants = require ("../../../Constants");
const AngelofRetributionBase = require("../setBBD/AngelofRetribution");

class AngelofRetribution extends AngelofRetributionBase {
  constructor (game) {
    super(game, "Angel of Retribution", "Torment", "TOR");
  }
}

module.exports = AngelofRetribution;
