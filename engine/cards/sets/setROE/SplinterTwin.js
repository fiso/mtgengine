"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SplinterTwinBase = require("../setMM2/SplinterTwin.js");

class SplinterTwin extends SplinterTwinBase {
  constructor(game) {
    super(game, "Splinter Twin", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SplinterTwin;
