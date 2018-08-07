"use strict";
const Constants = require ("../../../Constants");
const CloudElementalBase = require("../setMM2/CloudElemental");

class CloudElemental extends CloudElementalBase {
  constructor (game) {
    super(game, "Cloud Elemental", "Visions", "VIS");
  }
}

module.exports = CloudElemental;
