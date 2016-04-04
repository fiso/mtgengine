"use strict";
const Constants = require ("../../../Constants");
const LandLeechesBase = require("../set4ED/LandLeeches");

class LandLeeches extends LandLeechesBase {
  constructor(game) {
    super(game, "Land Leeches", "The Dark", "DRK");
  }
}

module.exports = LandLeeches;
