"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RiftwingCloudskateBase = require("../setDD3_JVC/RiftwingCloudskate.js");

class RiftwingCloudskate extends RiftwingCloudskateBase {
  constructor(game) {
    super(game, "Riftwing Cloudskate", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = RiftwingCloudskate;
