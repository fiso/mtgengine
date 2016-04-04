"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LandLeechesBase = require("../set4ED/LandLeeches.js");

class LandLeeches extends LandLeechesBase {
  constructor(game) {
    super(game, "Land Leeches", "The Dark", "DRK");
  }
}

module.exports = LandLeeches;
