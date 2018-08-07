"use strict";
const Constants = require ("../../../Constants");
const CloudElementalBase = require("../setMM2/CloudElemental");

class CloudElemental extends CloudElementalBase {
  constructor (game) {
    super(game, "Cloud Elemental", "World Championship Decks 1997", "WC97");
  }
}

module.exports = CloudElemental;
