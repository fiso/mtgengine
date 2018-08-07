"use strict";
const Constants = require ("../../../Constants");
const WeldingJarBase = require("../setWC04/WeldingJar");

class WeldingJar extends WeldingJarBase {
  constructor (game) {
    super(game, "Welding Jar", "Mirrodin", "MRD");
  }
}

module.exports = WeldingJar;
