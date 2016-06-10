"use strict";
const Constants = require ("../../../Constants");
const ReefPiratesBase = require("../set5ED/ReefPirates");

class ReefPirates extends ReefPiratesBase {
  constructor (game) {
    super(game, "Reef Pirates", "Homelands", "HML");
  }
}

module.exports = ReefPirates;
