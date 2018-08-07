"use strict";
const Constants = require ("../../../Constants");
const CloudElementalBase = require("../setMM2/CloudElemental");

class CloudElemental extends CloudElementalBase {
  constructor (game) {
    super(game, "Cloud Elemental", "Magic 2011", "M11");
  }
}

module.exports = CloudElemental;
