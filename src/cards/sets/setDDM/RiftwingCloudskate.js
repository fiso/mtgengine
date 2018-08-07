"use strict";
const Constants = require ("../../../Constants");
const RiftwingCloudskateBase = require("../setJVC/RiftwingCloudskate");

class RiftwingCloudskate extends RiftwingCloudskateBase {
  constructor (game) {
    super(game, "Riftwing Cloudskate", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = RiftwingCloudskate;
