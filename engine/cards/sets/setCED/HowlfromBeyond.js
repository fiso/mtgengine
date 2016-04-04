"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HowlfromBeyondBase = require("../set6ED/HowlfromBeyond.js");

class HowlfromBeyond extends HowlfromBeyondBase {
  constructor(game) {
    super(game, "Howl from Beyond", "Collector's Edition", "CED");
  }
}

module.exports = HowlfromBeyond;
