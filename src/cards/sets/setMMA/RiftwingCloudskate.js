"use strict";
const Constants = require ("../../../Constants");
const RiftwingCloudskateBase = require("../setJVC/RiftwingCloudskate");

class RiftwingCloudskate extends RiftwingCloudskateBase {
  constructor (game) {
    super(game, "Riftwing Cloudskate", "Modern Masters", "MMA");
  }
}

module.exports = RiftwingCloudskate;
