"use strict";
const Constants = require ("../../../Constants");
const NivMizzetDracogeniusBase = require("../setC17/NivMizzetDracogenius");

class NivMizzetDracogenius extends NivMizzetDracogeniusBase {
  constructor (game) {
    super(game, "Niv-Mizzet, Dracogenius", "Return to Ravnica", "RTR");
  }
}

module.exports = NivMizzetDracogenius;
