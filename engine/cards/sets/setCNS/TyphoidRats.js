"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TyphoidRatsBase = require("../setFRF/TyphoidRats.js");

class TyphoidRats extends TyphoidRatsBase {
  constructor(game) {
    super(game, "Typhoid Rats", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = TyphoidRats;
