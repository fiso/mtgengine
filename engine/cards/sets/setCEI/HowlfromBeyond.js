"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HowlfromBeyondBase = require("../set6ED/HowlfromBeyond.js");

class HowlfromBeyond extends HowlfromBeyondBase {
  constructor(game) {
    super(game, "Howl from Beyond", "International Collector's Edition", "CEI");
  }
}

module.exports = HowlfromBeyond;
