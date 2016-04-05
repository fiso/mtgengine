"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeldingJar extends UnimplementedCard {
  constructor(game) {
    super(game, "Welding Jar", "Mirrodin", "MRD");
  }
}

module.exports = WeldingJar;
