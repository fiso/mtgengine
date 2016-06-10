"use strict";
const Constants = require ("../../../Constants");
const CloudElementalBase = require("../setBTD/CloudElemental");

class CloudElemental extends CloudElementalBase {
  constructor (game) {
    super(game, "Cloud Elemental", "Tenth Edition", "10E");
  }
}

module.exports = CloudElemental;
