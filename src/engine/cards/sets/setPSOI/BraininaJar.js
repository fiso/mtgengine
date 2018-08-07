"use strict";
const Constants = require ("../../../Constants");
const BraininaJarBase = require("../setSOI/BraininaJar");

class BraininaJar extends BraininaJarBase {
  constructor (game) {
    super(game, "Brain in a Jar", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = BraininaJar;
