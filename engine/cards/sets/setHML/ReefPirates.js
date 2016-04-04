"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReefPiratesBase = require("../set5ED/ReefPirates.js");

class ReefPirates extends ReefPiratesBase {
  constructor(game) {
    super(game, "Reef Pirates", "Homelands", "HML");
  }
}

module.exports = ReefPirates;
