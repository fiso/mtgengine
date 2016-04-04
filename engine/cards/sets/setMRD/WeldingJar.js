"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WeldingJar extends Card {
  constructor(game) {
    super(game, "Welding Jar", "Mirrodin", "MRD");
  }
}

module.exports = WeldingJar;
